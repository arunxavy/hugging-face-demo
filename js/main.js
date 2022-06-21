
function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object
  console.log(f);

    // Only process image files.
    if (!f.type.match('image.*'))
    {
      alert("not an image")
      return;
    }


    var reader = new FileReader();
  reader.onload = (function(theFile) {
    return function(e) {
      document.getElementById("ip").src =e.target.result;
      fetch('https://hf.space/embed/creationAI/WM/+/api/predict/', { method: "POST", body: JSON.stringify({"data":[ e.target.result, "[KR] TrueBeauty_JUKYUNG"

          ]}), headers: { "Content-Type": "application/json" } }).then(function(response) { return response.json(); }).then(function(json_response){ console.log(json_response);
        document.getElementById("op").src =json_response.data;
        var a = document.createElement("a"); //Create <a>
        a.href = json_response.data;
        a.download = theFile.name+"-webtooned.png";
        a.click();
          })
    }})(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);


}

document.getElementById('img-upload').addEventListener('change', handleFileSelect, false);
