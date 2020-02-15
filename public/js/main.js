$(document).ready(() => {
});

new Vue({
  template:`
    <div class="container-fluid w-100 h-100">
      <div class="row justify-content-center h-100">
        <div class="col-sm-12 col-md-8 col-xl-12 chat">
          <div class="card">
            <!-- Top Profile -->
            <div class="card-header msg_head">
              <div class="d-flex bd-highlight">
                <div class="img_cont">
                  <img src="robot.jpeg" class="rounded-circle user_img">
                  <span class="online_icon"></span>
                </div>
                <div class="user_info">
                  <span>Chat with AgrScan Bot</span>
                </div>
              </div>
            </div>
            <!-- Messages -->
            <div class="card-body msg_card_body">
              <!-- Same Message in For Loop -->
              <div class="d-flex justify-content-start mb-4">
                <div class="img_cont_msg">
                  <img src="robot.jpeg" class="rounded-circle user_img_msg">
                </div>
                <div class="msg_cotainer">
                  {{messages[0]}}
                  <span class="msg_time">8:40 AM, Today</span>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-light btn-circle"><i class="fas fa-camera"></i></button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  data:{
    chatBotPic: 'robot.jpeg',
    messages: ['Hi, How are you?'],
    userPic: 'user.png',

  },
  methods:{

  }
}).$mount('#root')