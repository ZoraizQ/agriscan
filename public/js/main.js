$(document).ready(() => {

});

new Vue({
  template:`
    <div class="container-fluid w-100 h-100">
      <div class="row justify-content-center h-100">
        <div class="col-sm-12 col-md-8 col-xl-10 chat">
          <div class="bg-white card">
            <!-- Top Profile -->
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="robot.jpeg" class="rounded-circle user_img">
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span style="color: white; font-size: 20px;">Chat with AgriScan Bot</span>
                </div>
              </div>
            </div>
            <!-- Messages -->
            <div v-if="preProcessing()" class="card-body msg_card_body">
              <!-- ChatBot Message in For Loop -->
              <div v-for="(m, i) in messages">
                <div v-if="m['sender']" class="d-flex justify-content-start mb-4">
                  <div class="img_cont_msg">
                    <img src="robot.jpeg" class="rounded-circle user_img_msg">
                  </div>
                  <div class="msg_cotainer">
                    <div>{{m['data']}}</div>
                  </div>
                </div>
                <!-- User Message -->
                <div v-else class="d-flex justify-content-end mb-4">
                  <div class="msg_cotainer_send">
                    <div id="outer" v-if="showImage(m['data'], i)">
                      <img v-bind:id="'clientimg'+i" src="" class="pic_msg">
                    </div>
                  </div>
                  <div class="img_cont_msg">
                    <img src="user.png" class="rounded-circle user_img_msg">
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button @click="onPickFile" type="button" class="btn btn-light btn-circle">
                <i class="fas fa-camera"></i>
              </button> 
              <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data:{
    messages: [{'sender':1, 'data':'Hi, I am AgriScan Bot. I am a Plant Based Disease Detector.'}, {'sender':1, 'data':'Please upload the picture of the crop.'}],
    image: null
  },
  methods:{
    preProcessing(){
      this.botTurn = 1;
      return true
    },
    changeIt(inp){
      if(this.botTurn){
        this.botTurn = 0
        return true
      }
      else{
        this.botTurn = 1
        return false
      }
    },
    onPickFile() {
      this.$refs.fileInput.click();
    },
    async onFilePicked(event) {
      const files = event.target.files;
      let filename = files[0].name;
      const fileReader = new FileReader();
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);

      this.image = files[0];

      let y = function(file, li, callback) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
          callback(li, reader.result);
        };
      };

      let base64val = function(x, y) {
        // console.log(y);
        x.push({'sender':0, 'data':y});
        x.push({'sender':1, 'data':'Healthy Plant'})
      };
      
      y(this.image, this.messages, base64val);
      
      const formData = new FormData();
      formData.append('myFile', this.image);

      const options = {
        method: 'POST',
        body: formData,
        // If you add this, upload won't work
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      };
      delete options.headers['Content-Type'];
      const answer = await (await fetch('/uploads', options)).json();
      this.messages.push({'sender':1, 'data':answer.diseaseStatus})
    },
    showImage(inp, i) {
      $(document).ready(function() {
        $('#outer').ready(function() {
          let x = i.toString();
          // console.log(x)
          document.getElementById('clientimg'.concat(x)).setAttribute('src', inp);
        });
      });
      return true;
    }
  }
}).$mount('#root')