function loadHeader(headerId){
    var text = '<h1><a style="color: white; text-decoration: none;" href="/">Fitness Central</a></h1>';
    text+='<ul >';
    text+='<a style="color: white; text-decoration: none;" href="/"><li>Home</li></a>';
    text+='<a style="color: white; text-decoration: none;" href="About.html"><li>About</li></a>';
    text+='<a style="color: white; text-decoration: none;" href="Contact.html"><li>Contact Us</li></a>';
    text+='<a style="color: white; text-decoration: none;" href="register.html"><li>Register</li></a>';
    text+='<a style="color: white; text-decoration: none;" href="Login.html"><li>Login</li></a>';
    text+='</ul>';
    document.getElementById(headerId).innerHTML = text;
}