

function postComment() {
    console.log('Hello Limuja');
    // Get the data from text
    let usercomment = document.querySelector('.data-comment-text').value; 
    let username = document.querySelector('.data-comment-name').value;
    console.log(usercomment, username);
    // create li 
    /**
     * <hr class="divider">
        <div class="comment__card">
          <div class="comment__div--left">
             <img class="comment__card-img"
              src="./assets/images/comment_placeholder_img.png">
          </div>
          <div class="comment__div--right">
            <div class="comment__div--middle">
              <h3 class="comment__card-name">Connor Walton</h3>
              <h4 class="comment__card-date">02/17/2022</h4>
            </div>
            <div class="comment__div--bottom">
              <p class="comment__text">This is art. This is inexplicable magic expressed in the purest way, everything
                that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it
                contains.</p>
            </div>
          </div>
        </div>
     * 
     */
    let hrElem = document.createElement('hr');
    hrElem.classList.add('divider');

    let commentCard = document.createElement('div');
    commentCard.classList.add('comment__card');

    let commentCardLeft = document.createElement('div');
    commentCardLeft.classList.add('comment__div--left');

    let commentCardRight = document.createElement('div');
    commentCardRight.classList.add('comment__div--right');

    let userImg = document.createElement('img');
    userImg.classList.add('comment__card-img');
    userImg.src='./assets/images/Mohan-muruge.jpg';    
    let commentCardMiddle = document.createElement('div');
    commentCardMiddle.classList.add('comment__div--middle');

    let commentCardName = document.createElement('div');
    commentCardName.innerText = username;
    commentCardName.classList.add('comment__card-name');

    let commentCardDate = document.createElement('div');
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    commentCardDate.innerText = month+"/"+day+"/"+year;
    commentCardDate.classList.add('comment__card-date');

    let commentCardBottom = document.createElement('div');
    commentCardBottom.classList.add('comment__div--bottom');

    let commentText= document.createElement('p');
    commentText.innerText = usercomment;
    commentText.classList.add('comment__text');


    // add to the <ul id="comments-list">
    let parentElem = document.querySelector('.comment');
    parentElem.prepend(hrElem);
    parentElem.prepend(commentCard);
    commentCard.appendChild(commentCardLeft);
    commentCard.appendChild(commentCardRight);
    commentCardLeft.appendChild(userImg);
    commentCardRight.appendChild(commentCardMiddle);
    commentCardRight.appendChild(commentCardBottom);
    commentCardMiddle.appendChild(commentCardName);
    commentCardMiddle.appendChild(commentCardDate);
    commentCardBottom.appendChild(commentText);

}