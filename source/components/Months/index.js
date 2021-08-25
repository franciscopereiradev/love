function Months(){
    const today = new Date().getTime()

    const zero = new Date(`March 06 2021 00:00:00`).getTime()
    const one = new Date(`April 06 2021 00:00:00`).getTime()
    const two = new Date(`May 06 2021 00:00:00`).getTime()
    const three = new Date(`June 06 2021 00:00:00`).getTime()
    const four = new Date(`July 06 2021 00:00:00`).getTime()
    const five = new Date(`August 06 2021 00:00:00`).getTime()
    const six = new Date(`September 06 2021 00:00:00`).getTime()
    const seven = new Date(`October 06 2021 00:00:00`).getTime()
    const height = new Date(`November 06 2021 00:00:00`).getTime()
    const nine = new Date(`December 06 2021 00:00:00`).getTime()
    const ten = new Date(`January 06 2022 00:00:00`).getTime()
    const eleven = new Date(`February 06 2022 00:00:00`).getTime()
    const twelve = new Date(`March 06 2022 00:00:00`).getTime()

    // console.log(today, zero, one, two, three, four, five, six, seven, height, nine, ten, eleven, twelve)

     if(today <= one){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>Inicio de namoro</h2>
                  <p class='dateDone'>06/03/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>1  mês de namoro</h2>
                  <p class='date'>06/04/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>2 meses de namoro</h2>
                  <p class='date'>06/5/2021</p>
              </li>
              </>
        )
    }else if(today <= two){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>2 meses de namoro</h2>
                  <p class='dateDone'>06/04/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>3 meses de namoro</h2>
                  <p class='date'>06/05/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>4 meses de namoro</h2>
                  <p class='date'>06/06/2021</p>
              </li>
              </>
        )
    }else if(today <= three){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>3 meses de namoro</h2>
                  <p class='dateDone'>06/05/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>4 meses de namoro</h2>
                  <p class='date'>06/06/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>5 meses de namoro</h2>
                  <p class='date'>06/07/2021</p>
              </li>
              </>
        )
    }else if(today <= four){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>4 meses de namoro</h2>
                  <p class='dateDone'>06/06/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>5 meses de namoro</h2>
                  <p class='date'>06/07/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>6 meses de namoro</h2>
                  <p class='date'>06/08/2021</p>
              </li>
              </>
        )
    }else if(today <= five){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>5 meses de namoro</h2>
                  <p class='dateDone'>06/07/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>6 meses de namoro</h2>
                  <p class='date'>06/08/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>7 meses de namoro</h2>
                  <p class='date'>06/09/2021</p>
              </li>
              </>
        )
    }else if(today <= six){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>5 meses de namoro</h2>
                  <p class='dateDone'>06/08/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>6 meses de namoro</h2>
                  <p class='date'>06/09/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>7 meses de namoro</h2>
                  <p class='date'>06/10/2021</p>
              </li>
              </>
        )
    }else if(today <= seven){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>6 meses de namoro</h2>
                  <p class='dateDone'>06/09/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>7 meses de namoro</h2>
                  <p class='date'>06/10/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>8 meses de namoro</h2>
                  <p class='date'>06/11/2021</p>
              </li>
              </>
        )
    }else if(today <= height){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>7 meses de namoro</h2>
                  <p class='dateDone'>06/10/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>8 meses de namoro</h2>
                  <p class='date'>06/11/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>9 meses de namoro</h2>
                  <p class='date'>06/12/2021</p>
              </li>
              </>
        )
    }else if(today <= nine){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>8 meses de namoro</h2>
                  <p class='dateDone'>06/11/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>9 meses de namoro</h2>
                  <p class='date'>06/12/2021</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>10 meses de namoro</h2>
                  <p class='date'>06/01/2022</p>
              </li>
              </>
        )
    }else if(today <= ten){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>9 meses de namoro</h2>
                  <p class='dateDone'>06/12/2021</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>10 meses de namoro</h2>
                  <p class='date'>06/01/2022</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>11 meses de namoro</h2>
                  <p class='date'>06/02/2022</p>
              </li>
              </>
        )
    }else if(today <= eleven){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>10 meses de namoro</h2>
                  <p class='dateDone'>06/01/2022</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>11 meses de namoro</h2>
                  <p class='date'>06/02/2022</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>12 meses de namoro</h2>
                  <p class='date'>06/03/2022</p>
              </li>
              </>
        )
    }else if(today <= twelve){
        return(
            <>
            <li id='pastMonth'class='listItem'>
                  <h2 class='itemDone'>11 meses de namoro</h2>
                  <p class='dateDone'>06/02/2022</p>
              </li>
              <li id='correntMonth' class='listItem'>
                  <h2 class='item'>12 meses de namoro</h2>
                  <p class='date'>06/03/2022</p>
              </li>
              <li id='nextMonth'class='listItem'>
                  <h2 class='item'>13 meses de namoro</h2>
                  <p class='date'>06/04/2022</p>
              </li>
              </>
        )
    }
}

export default Months