import { FiChevronRight } from 'react-icons/fi'

async function madeLogin(){
  var mainLogin = document.querySelector('div#mainLogin')
  var mainBD = document.querySelector('div#mainBirthday')
  var mainHome = document.querySelector('div#mainHome')
  var mainReward = document.querySelector('div#mainReward')
  var buttonHome = document.querySelector('button#homeBt')
  var buttonBD = document.querySelector('button#birthdayBt')
  var buttonReward = document.querySelector('button#rewardBt')
  var footer = document.querySelector('footer#footer')
  var pass = document.querySelector('input#password')
  var remember = document.querySelector('input#remember')

  var passCheck = '0603'

  if(pass.value === passCheck && remember.checked == false){

    buttonHome.setAttribute('class', 'pageCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainCorrent')
    mainReward.setAttribute('class', 'mainReward')
    mainLogin.setAttribute('class', 'mainLogin')
    footer.style.display = 'flex'
    mainLogin.style.display = 'none'

  }else if(pass.value === passCheck && remember.checked == true){
    localStorage.setItem('mode', 'login')

    buttonHome.setAttribute('class', 'pageCorrent')
    buttonBD.setAttribute('class', 'pageNotCorrent')
    buttonReward.setAttribute('class', 'pageNotCorrent')
    mainBD.setAttribute('class', 'mainBirthday')
    mainHome.setAttribute('class', 'mainCorrent')
    mainReward.setAttribute('class', 'mainReward')
    mainLogin.setAttribute('class', 'mainLogin')
    footer.style.display = 'flex'
    mainLogin.style.display = 'none'
  } else {
    alert('Couple code não encontrado!')
  }
}

function LoginPage() {
  return (
    <div class='container'>
      <div class='circle1'></div>
      <div class='circle2'></div>
      <div class='glassBD'>
        <h1>Couple Code ❤</h1>
        <div class='form'>
          <input id='password' class='loginInput' type='password'></input>
          <button type='submit' onClick={madeLogin} class='keyLogin'><FiChevronRight/></button>
        </div>
        <div class='rememberBox'>
          <input id='remember' name='login' type='checkbox'></input>
          <p>Lembrar Couple Code ❤</p>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
