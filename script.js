const box = document.querySelectorAll('.box')
let turn = 0
let game_over = false
let msg = ''
box.forEach(element => {
    element.addEventListener('click', () => {
        if(element.innerHTML == ''){
            if(turn % 2 == 0){
                element.innerHTML = 'O'
            }
            else{
                element.innerHTML = 'X'
            }
            turn++   
        }
        if((box[0].innerHTML != '') && (box[0].innerHTML == box[1].innerHTML) && (box[0].innerHTML == box[2].innerHTML)){
            box[0].style.textDecoration = 'line-through'
            box[1].style.textDecoration = 'line-through'
            box[2].style.textDecoration = 'line-through'
            msg = `'${box[0].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[3].innerHTML != '') && (box[3].innerHTML == box[4].innerHTML) && (box[3].innerHTML == box[5].innerHTML)){
            box[3].style.textDecoration = 'line-through'
            box[4].style.textDecoration = 'line-through'
            box[5].style.textDecoration = 'line-through'
            msg = `'${box[3].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[6].innerHTML != '') && (box[6].innerHTML == box[7].innerHTML) && (box[6].innerHTML == box[8].innerHTML)){
            box[6].style.textDecoration = 'line-through'
            box[7].style.textDecoration = 'line-through'
            box[8].style.textDecoration = 'line-through'
            msg = `'${box[6].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[0].innerHTML != '') && (box[0].innerHTML == box[3].innerHTML) && (box[0].innerHTML == box[6].innerHTML)){
            box[0].style.textDecoration = 'line-through'
            box[3].style.textDecoration = 'line-through'
            box[6].style.textDecoration = 'line-through'
            msg = `'${box[0].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[1].innerHTML != '') && (box[1].innerHTML == box[4].innerHTML) && (box[1].innerHTML == box[7].innerHTML)){
            box[1].style.textDecoration = 'line-through'
            box[4].style.textDecoration = 'line-through'
            box[7].style.textDecoration = 'line-through'
            msg = `'${box[1].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[2].innerHTML != '') && (box[2].innerHTML == box[5].innerHTML) && (box[2].innerHTML == box[8].innerHTML)){
            box[2].style.textDecoration = 'line-through'
            box[5].style.textDecoration = 'line-through'
            box[8].style.textDecoration = 'line-through'
            msg = `'${box[2].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[0].innerHTML != '') && (box[0].innerHTML == box[4].innerHTML) && (box[0].innerHTML == box[8].innerHTML)){
            box[0].style.textDecoration = 'line-through'
            box[4].style.textDecoration = 'line-through'
            box[8].style.textDecoration = 'line-through'
            msg = `'${box[0].innerHTML}' is the winner.`
            game_over = true
        }
        else if((box[2].innerHTML != '') && (box[2].innerHTML == box[4].innerHTML) && (box[2].innerHTML == box[6].innerHTML)){
            box[2].style.textDecoration = 'line-through'
            box[4].style.textDecoration = 'line-through'
            box[6].style.textDecoration = 'line-through'
            msg = `'${box[2].innerHTML}' is the winner.`
            game_over = true
        }
        
        if(game_over)
        {
            document.getElementsByClassName('game-over')[0].style.display = 'flex'
            document.querySelector('.game-over>p').innerHTML = msg
        }
    })
});
        
        


function restart(){
    window.location.reload()
}