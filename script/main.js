let body = document.querySelector("body")
let video = document.querySelector("#video")

function play() {
    video.play();
}

document.querySelector(".video-hover").onclick = function() {
    this.style.display = "none";
    play();
}

if (window.location.hash.length > 0) {
    window.location = window.location.hash.substring(5); //substr(5) in my case
}


/*_________________________________________MODAL WINDOW SCRIPT_______________________________________*/
document.querySelectorAll(".sign-in").forEach(function(element) {
    element.onclick = show;
    element.unselectable = "on"
});

function show() {
    let modalId = this.dataset.modal
    document.querySelector(modalId).classList.remove("hide")
    document.onkeydown = function(e) {
        if (e.keyCode == 27) close()
    }
    body.style.overflow = "hidden"
}

document.querySelectorAll(".modal-project-close").forEach(function(element) {
    element.onclick = close;
});

document.querySelectorAll(".modal-wrapper").forEach(function(element) {
    element.onclick = close
});

document.querySelector("#sign-up .modal-project").onclick = function() {
    event.stopPropagation()
}

document.querySelector("#sign-in .modal-project").onclick = function() {
    event.stopPropagation()
}

function close() {
    document.querySelectorAll('.modal-wrapper').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
    body.style.overflow = "visible"
}

document.querySelector("#sign-up .modal-project").onclick = function() {
    event.stopPropagation()
}

document.querySelector('.read-rules').onclick = function() {

    if (window.matchMedia("(max-width: 576px)").matches) {
        document.querySelector('.slider-project').style.marginLeft = '-307px';
    } else {
        document.querySelector('.slider-project').style.marginLeft = '-371px';
    }
}

document.querySelectorAll('.go-back').forEach(function(element) {
    element.onclick = function() {
        if (window.matchMedia("(max-width: 576px)").matches) {
            document.querySelector('.slider-project').style.marginLeft = '-2px';
        } else {
            document.querySelector('.slider-project').style.marginLeft = '-3px';
        }

    }

})


document.querySelector('#switcher').onchange = function() {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    } else {
        document.querySelector('#signup-submit').classList.add('disabled');

    }
}

document.querySelector(".go-up").onclick = function() {
    document.querySelector('.right-part').scrollTop = "100px";
}