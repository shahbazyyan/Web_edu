	// comment section
    const comment_submit = document.querySelector("#comment_submit");
    const comment_name = document.querySelector("#comment_name");
    const comment_text = document.querySelector("#comment_text");
    const forappend = document.querySelector(".forappend");
    
    comment_submit.addEventListener("click", (e) => {
      e.preventDefault();
    
      const commentElement = document.createElement("div");
      commentElement.classList.add("testimonial-col");
      
      
      const commentImage = document.createElement("img");
      commentImage.src = "imgs/user3.jpg";
      commentImage.alt = "img";
      commentElement.appendChild(commentImage);
    
      const commentContent = document.createElement("div");
      const commentParagraph = document.createElement("p");
      commentParagraph.textContent = comment_text.value;
      commentContent.appendChild(commentParagraph);
    
      const commentName = document.createElement("h3");
      commentName.textContent = comment_name.value;
      commentContent.appendChild(commentName);

      commentElement.style.cssText = `
             width: 47.2%;
            
             margin-left: 20px;
      `;

      commentElement.appendChild(commentContent);

      forappend.appendChild(commentElement);
    
      comment_name.value = "";
      comment_text.value = "";
    });
    
