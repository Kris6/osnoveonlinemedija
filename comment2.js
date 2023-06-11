var post= document.getElementById("submit1");
post.addEventListener("click", function(){
    var ImeValue= document.getElementById("ime").value;
    var EmailValue= document.getElementById("email").value;
    var commentBoxValue= document.getElementById("comment").value;
 if(ImeValue!= "" & EmailValue!= "" & commentBoxValue!= "" & commentBoxValue!= "                        ")
 {
    var li1 = document.createElement("li1");
    var li = document.createElement("li");
    var text1 = document.createTextNode(`${ImeValue}, ${EmailValue}`);
    var text = document.createTextNode(commentBoxValue);
    li1.appendChild(text1);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li1);
    document.getElementById("unordered").appendChild(li);
}
else {
    alert("Popunite sva polja za komentar")
}
});