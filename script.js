function string() {
    var str = document.getElementById("string").value;
    var l = str.split(' ');
    
    var minstr = [];
    var maxstr = [];

    var max = Number.MIN_VALUE;
    var min = Number.MAX_VALUE;

    for (var i = 0; i < l.length; i++) {
        if (l[i].length < min) min = l[i].length;
        if (l[i].length > max) max = l[i].length;
    }

    for (var i = 0; i < l.length; i++) {
        if (l[i].length == min) minstr.push(l[i]);
        if (l[i].length == max) maxstr.push(l[i]);
    }
    
    document.getElementById("outputmin").innerHTML = "Shortest word(s): " + minstr.toString();
    document.getElementById("outputmax").innerHTML = "Longest word(s): " + maxstr.toString();
}

function bmi() {
    var h = parseFloat(document.getElementById("height").value)/100;
    var w = parseFloat(document.getElementById("weight").value);

    var bmi = w / (h * h);
    var result;

    if (bmi < 18) result = "Underweight";
    else if (bmi >= 18 && bmi < 25) result = "Normal";
    else if (bmi >= 25 && bmi < 30) result = "Overweight";
    else result = "Obese";

    document.getElementById("bmi").innerHTML = "BMI: " + bmi.toPrecision(4);
    document.getElementById("result").innerHTML = "Result: You are " + result + "!";
}

function grow() {
    var r = parseInt(document.getElementById("rows").value);
    var c = parseInt(document.getElementById("cols").value);
    var l = ["https://media.istockphoto.com/vectors/simple-apple-in-flat-style-vector-illustration-vector-id1141529240?k=20&m=1141529240&s=612x612&w=0&h=_j9z-sPT6AqFDSSXHnSYWrXOvDOgyMmSdTUrBiZULCo=", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYZGRgZGhkdGhoaGhoZHBwYHBoaGhgaGhwcIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQrJSs0NDo0NDQ0NDQ2PTQ0NjQ0NDQ9NDQ0NDQ9NDY2NjQ0NDQ0NDQ2NDQ0NDQ0NDQ0NDQ0Pf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwQCBQYBB//EADcQAAEDAgQEBAUDAwQDAAAAAAEAAhEDIQQxQVEFEmFxgZGx8CIyocHRBhPhQlLxFBZiggcjcv/EABoBAQACAwEAAAAAAAAAAAAAAAACAwEEBQb/xAArEQACAgEEAQMCBgMAAAAAAAAAAQIRAwQSITFRBRNBYXEiUoGRocEUMkL/2gAMAwEAAhEDEQA/APsyIiAIiIAiIgCIvEARUMXxWlTs54nYXPjGXitLW/WDI+Cm53cho87hQc4rtkXJLs6lFxn+8X5/sNjo+T107qVv60aDDqLxlcGfoQFH3ojfHydci1mA4zRq2a8B39psfDQ+C2asUk+iSdnqIiyAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDxEVLH45tMG/xRIH0v4keaGG6JMZjG0xLj2AzK5Di/G31AWtdytP9pvExc7/AJUGMxD3lznGc9I0sP4C0mOxfLOoLoFviDZBvob6fhVzlwUynYr4kgxPc5/9ZVOpXdre5JiBcmYAByssK7wHHOJ0EkbWVVmIyvfWbQZyyutSUiqy8zEw7MSTlYRrH+d1sg7naDr5yS22v0XPtv8AKIubROu+mXqruGqPEAsJ1y2AyI8FFSrgybSi8cw5xryzlBIGue1uq3WB4jWoxDv3GTHKZkZ5HMRYbXXOuc51+QydYtnrfbVW8Hii0fEDH0gkT2Uk+f7JRlR9E4fjmVm8zD3BzB2IVtcTw7FBrg9hidDYHKxXX4bEB7Q4eI1B2W3jk2uey+MkywixcYWSsJBFhzDLVZoAiIgCIiAIiIAiIgCIiAIiIAiKrjMSKbeaCTo0Zk7IDHHYsMbnf06lcbxqsSXEm3LfUuMggZbc3mrWOrPcNC8zd1myJzAOQMeS1L8I4lsvJDGgExPNAkudOhvZRZTKVlHFYgkOIcZcLxcgCATGQOQBO/itZUovcWj5ZAAaLkAZi3eST9luSyBDBJyk6CZv1nyHZV8TRAfytgOcASZk8o+aAZIn7E9FRJXyyplD/QMIEmRfObn/AKiJspqOEaMrEGBaxkaQcxktnQ4PVeZaxz9hMNEG1yAOsLa/7ScZc97WiBmS4j7Ktx+aMqEpdI0QwgAMgkmDB2iwg6yfeanZhoyEnyOk3Pbst6zhFNoABc4DWAwW1geyp2YemP6QQc5vf7LVnq8MO2bEdHkZpDTY2BNyY8c9Pd1OGbA26EWMea3TeUZNHgFnz+aqfqcP+Y2XLRP5ZqsPROUE+B7ahbbCPcy/mPyFk1vsqN4Iuoy9QdXGNfqTjpEn2bN2Lp1GlpdEjPY6EHcFc+z9ZspB7MQ1zX0y4FzRLXBtg4H/AJQpauGbU6HcWI/K+Pccxri97OaWh7h5GMvBbGn1ksz6r6mMmLYuWd7+nf1PisXi3BkNY85Fs8rB/VOYtHivp6+cf+M8L+1QNXlBNQwNw1p+59Au/wAPimuyN9lu4ssHJq+SpY5JWWkRFsmAiIgCIiAIiIAiIgCIiAwe4AEnILluJYs1HSLAAwNeWwmN7jNbzibiW8rQSToAVp6HCKpcCYHfbw2MrDISt8Io4phLeaxDB/UeVo2iBMzrG6ocHxBxDXAMyPLLSXB0X5hac11A/TlN3zlzhq0Etae8XOZ1W1w+FZTaGsa1oGjQAFGnuv4IqDs5zCfp13xAnkaSf+TjNpzgLcYTg1GncN5nf3O+I/geAWyVbE4iLDP0STjFWyyMOaRji8WGC1zt+dlqq1Qv+YmdBpPZSloHzX5jabyVE8EAiRO8b5R4Ll6icp2n14N7HCMeu/JA8wIt37dVB+6M8728Fg9/MTIy9Bn0Cp1sQCbuHhNuy42Wnyuvg3IQNg2t9fMKalUk9dtVoauLDbE9oNo8NVJRx94kdFUriyx4bXB03LABuPeyixBBbZU8NxPSyw4hxJrQcr9VtPJGcHt4NX25RfKNbxLiho0nvOcEN/8Ao2H58F8woYNtV3LzBr4JBMkE52jW/wBFtf1fxkPcGMPwtuQbXP2hXf0ZwyR+64kl1gBYWzJP4W5gX+Ni3S+Sucffnx0XP0ZiMVzhj3FlNoPwxIJFgAdLld6KrjkIVLAhrZ5WgTcwAJO5W2pwR1VDze8/wuiXt+1d8lrB4w5P8D+VsQVpixZ0a5adxsupg1LilGfK8mvPEnzE26KOnUDhIUi6KaatGs1R6iIsgIiIAiIgC8XqIDBjIELNEQBEXhQENepyjroqDr3Oc6rKrV5neihe+/YE+wtSc7+xswhSPK1TlvNhnpbUrVYrEhxj4jzD4QBfrfRZvJc347czgA0XvNgdz0VPGYstLiLNENaNAcz4wubqJNrwjaxxp18lfEFwtIEZjY7DUncqmcIXTePP1R9eDcmdv8+CyOJkfDvvBhc2Xdm7G0SM4cB8zpHuys0MOxpENnuqRrOzhSjEkAWVUrZl7n8m7pUqbh8gK0P6hwQ5eZoIcw8wE2dBuDtIlbLDVhmdVkC15jTXqpxycLhWUqLTd3RwWLwVDEOa4tcxzmiA74XTJBbORynxXXYJrGBrAIDAALECNL6nNbZ3DmPa4FoIMZ9PuqmGPL8J0tCtzZpOCT6/crx44puUW+PgzY9oMrb4WsHCyrf6FjhPyztZQ/6V7PiaZA22Ucanie6rX0E3Gaq6f1NqIsQfeyOHQqvQr8w2KsdCffRdKMlKNro1mnF0zGnWLDOm2621KqHAEarSVgLDW5gFe4DFchufhMeHX3urMGqWKeyT4f8ADI5MW6O5dm/ReBersGmEREAREQBERAEREB4quNrhoziVaWj4nVl0aDX34qjPk2QtFuGG6RGahmwv0269VHVB5SGyCdevdYsmMozici249FWxdfQGYiy50sn4bZvKPNIq4vEhg5WwC0kyIJNrmdO61FfFkBwjMz4iQV7jXHlJloMgHsde34Wrr1LWJgEnPQ281oTbZuY4Iz5yep8/VZUX/dVqbrT9D6qemHbKtov2lmg4q7QrAjQAeqo0o9Ol1dw9OHXiPKQqZIxJInxLxyiJk65d/RT4CBGyrPHNDRNvBSUCRIyI9FB8EGrjRuW1IAIsqOKaJLge/wCV6agz8x9ws3ujOCDn2KspSVMpjHa7LeBxB5b5e81c/d8itJhG8pPL66K258Gwmc+iux5Go8/BVPEt3BcfTm4sVk0kDO3W6r062QUsk91ZGSu0VuLXDJH1IHoq1Zp+mX1+yzc6/n2UL3/CIO3n/lV5ZXZmMa6NxwnE8zYmSPTRbFcvwzEFrxsbHxP5hdOu36dn97Cr7XDNLUY9k/uZIiLfKAiIgCIiAIiICKs6Gk7BczXfL5OV/MC3e5Pkt7xR0MPUgff7Lm69SCN/8n0XL186peDe0keGzJ9cAXmdBnBVCu0AFzsz9BaT3mEqVuU2kGCd/f8AC1eKrPj4jJMz0HXy9Fy/cvs3o4/BW4hUl0x8Jy6/lV4OcSSPr79VjWe6YyjTXt0UbnEDP+UNqMaSR7ae/orDXOiZsqpnU5LNrrQP5UWiyi6x5OqtB8/1XWrpmCsy6/W6rcTG02dOoQbyrIqiQSP5ha2mZ8laoVtxKrkiDiW+eJjLx7qwysAIt1nWVrDU0jPJShwNr+9VHlOzDhfZYaYJzEae81dpV7eH0WubSdmHA2yNisqVWCLkSLg7rKuPJCUVJGyEbn8fwpm1JyIVH9ybC2yfuaCJ6aqW/wAFThZadU5WloJJ1Ol1g97REaFRB984AOXVRk7qEp30IwJKbiDbeV2OHfLQdwFxdI3XWcLP/rA2kLqejydyiamujwmXkRF6A5oREQBERAEREBr+K/L72XK4moZsftZdXxT5J2krjsfl4/lcj1Hs6WjVxKdXEyDCo1xLTnbPuFI45mdxFvG6rVXG8fUrlo6cVXRUrbtmSclFNlnXfoNyotQFNFqM59+iAmc1EToPVSNIjx3WaMlgVFm95IvdVwWnovb6GbqFBItUasDLNWaVY9Qtaw95lWWvINpUJRMtF4HmgjMe7rxjzO2ahY7myzUjSD80g+9FBowT0n3gG+ndTmociB9PHJUWVDlNvutgxg5ZBvtKg0Qlx2Z06s6+O2imL77nfbqoXcpE819liSDBv0/lR+xXSZZbeBoNQEcdrKKm8WjxUhCgzFUzKn78V1HBj8JGxXNUW3955fldHwUWPh912PS41OzQ1v8AqbVERegOWEREAREQBERAUeJfLOxv5FcdiTF8jdv0kFdtjmyx3ZcXj55iIsZv10XM18bo6GjfDRo3NAHcnvoqlcwYzn0Wxqtm4tv3uPstdVN5t0XIqjqxdlM57/leXE+/BZEeCxP+fypllmI6aIXd/wApy3heOdr/AB2WTJnMzN16DCwaY3XvLqsGUSNd5qem/L6Kuy6mpm/ZRaJMsF951lSB91XGvTopGDIhVtGCXn0lW2VdFT5bqVmahJGHTL1N4nKVmx/lKrtddSsPWxVbRBotC/QKRQURkp2iY29eiilbK5cFrDsi+cCy6LhbIaTvH0C0VFgiPOPRdHgWw0bm5XofT8e05WrlwWkRF1TQCIiAIiIAiIgIqzZaRuCuMxzYdEExPvvl9V265fjNAh1t58DoOy1NXG42bWklUqOYxlMgZ9j6ha6u3yOmy2+LZLT1y7j2fNat7Yi2U/W64klTOxB8FAsgjxt3Xjmgk+v2U7mXWDgo2W2VnjMXXjblTPBHUa7rBzB7+ilZJM8hMuicvWFkWdCdlgymSUnTopOYX6rym030UrG5a9VBiw1vsqQeQ+yxYN+/8KVrcpn3oosWIk9tVK0ZI0SASs2NMbEqDFkrAJv4qVov1+yjaIU1NpJnJVtEWyWln5SrlESev39yq9NsGTll3V6gzIC0+/fdX4Me6XJRkkXsJR5i0De/hf1XQMbAAWu4bQHzf4/lbRek08NkTi557pUeoiLYKAiIgCIiAIiIDxa7i+G5myBcX8NVsUUZRUlTMxk4u0fPcXTgZee8rVPZeenqut47gC08w+UnyOy5qrTGS4OpxuE6O1gyKcbRrnMnP+VG5uZVt7D63UTh6e7LVs2kys5pWDhr78VZIUZbqs2SMAyc15ymdvupWtJF7dlnyLFiyNrL76qVrTMzbQI1p/hScnksNkrPWMkrKASsmtv0WTB5KJiz0NWbRfwXoZp7hSBqiyLPGCT6K2wengo6TPe6npsKzGNkZMkptynxW24fQJIE6nuqWHpLp8Dhg1uVyuro9Pbtmhqs21UWWMgAbLNEXZOUEREAREQBERAEREAREQENakHNLSJBzXG8X4Wabspacj9j1Xbwq2MYHNLSAQd1Rmwxyxp9l2HNLHLjo+b1GFVnt6Lp+IcJLZLJI2zI/IWkq0jquHmwSg6aOxizRkuDXluy8A6Kw9iwLFQy9MihZNaVnCyDVFkjFoKkDV40KRrVhgMbdZtCyDVlCiYsNaPeqyDSV6xqmptRKyLZ7TZ796K5SZl6eixoUlv+HcPyc8dh9yuhptNKTNXPnjBWzPheBgS7wn1W2XgC9XchBQjSOPObnK2eoiKZEIiIAiIgCIiAIiIAiIgCwqNkLNEBp6i1WOwrXXiDuF0WIw83HktZVpKE4KSplsJtO0cpiMKWncKo5i6ivhlq8RgloZNHF9G9DVNdmq5UDFYfhXBRFjxotWWil8GzHUxZiGrMLH4tkl39qrekn4Je/HySDJZNUbWvOisU8M8otFMw9RFGbbq7hsMXGwt9F7hcHut1hqK28OhS5ka2TVflLHDcA1vxES4a6eAW1UdFnKIUi6cYqKpHNlJyds9REUiIREQBERAEREAREQBERAEREAREQBQ1KLXZ+amRAa2pgTpdVauEOoW7Xqw0SUmjmn4MKB2AC6ksBzAWP7Df7QsbUZ3s5Y8OC9HDhsun/wBM3ZBh2/2hNqM+4zm28PCsU8DsFvRSGw8lIAiijDmzWUcAeyvUqQbl5qVFmiLbZ6iIsmAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDxeoiAIiIAiIgCIiALxEQHqIiAIiIAiIgCIiAIiID/9k="];
    //document.getElementById("garden").innerHTML = null;
    var garden = document.getElementById("garden");
    
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            var fruit = Math.floor(Math.random() * 2);
            var img = '<img src=' + l[fruit] + ' width = "150px" height = "150px"></img>';
            garden.innerHTML += img;
        }garden.innerHTML += "<br>";
    }
}

function convert() {
    var amt = parseFloat(document.getElementById("amt").value);
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var ans = document.getElementById("answer");

    var toINR = 79.97;
    var toUSD = 0.013;
    var result;
    
    if (from == to) result = amt;
    else if (from == "USD") result = amt*toINR;
    else result = amt*toUSD;
    
    //alert(result);
    ans.innerHTML = amt.toString() + " " + from + " = " + result.toString() + " " + to + "!";
}

function flip() {
    var img = document.getElementById("coin");
    var head = document.getElementById("num_heads");
    var tail = document.getElementById("num_tails");
    var h = parseInt(head.innerHTML);
    var t = parseInt(tail.innerHTML);

    var l = ["head.png", "tail.png"];
    var s = Math.floor(Math.random()*2);
    if (l[s]==l[0]) {
        head.innerHTML = h+1;
    } else {
        tail.innerHTML = t+1;
    };
    img.src = "media/"+l[s];
}

function bill() {
    var half = parseInt(document.getElementById("small").value);
    var one = parseInt(document.getElementById("medium").value);
    var two = parseInt(document.getElementById("large").value);
    var total;

    var small = 100;
    var medium = 200;
    var large = 400;

    total = (half*small) + (one*medium) + (two*large);
    var tax = 0.09 * total;
    total += tax;

    var radio = document.getElementsByName("tip");
    var tip;
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) tip = ((radio[i].value)/100)*total;
    }
    total += tip;

    document.getElementById("price").innerHTML = "Cost of order: " + total + " rupees!"
    
}
