(function(window, undefined) {
  var dictionary = {
    "7c0fe5fb-3511-4422-8920-8cd5fac431b6": "CONTACT",
    "9e907936-99d3-47a3-aace-e4b8f5d58fd8": "PORTFOLIO",
    "bf1a1caa-7fd2-4279-a19e-5efbd64d6840": "PRESUPUESTO",
    "e451408d-ccbc-4a45-892d-07da50b96b4f": "PORTFOLIO info",
    "aa7e2539-41a3-418f-81bc-18740d06171f": "QUIENES SOMOS",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "HOME",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);