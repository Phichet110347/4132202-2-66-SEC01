    var num  = 10;
    let name = "pong";
    age = 19;

    fruit = ["apple","mango","tangmo"];
    obj = { name:"Phihcet", age:30, tel: "0804274182"};

    data = {adress:["69", "jira", "Buriram", 3100], name: "john"};

    console.log(fruit[1]);
    console.log(obj.tel);
    console.log(data.adress[2]);

    document.getElementById("msg").innerHTML = data.adress[2];
    let longTxt = data.name + ":" + fruit[0];

    longTxt = `${data.name} : 
            ${fruit[1]}`;

   $(function(){
     $("#msg").html(longTxt); 
   });//jquery ready
