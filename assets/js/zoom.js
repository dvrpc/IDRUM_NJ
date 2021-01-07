// Zoom to look up
   document.getElementById('NJ').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").hide();
        map.flyTo({
            center: [-74.824, 39.87], 
            zoom: 8,
            speed: 0.5
        });

    });

    document.getElementById('BUR').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
        map.flyTo({
            center: [-74.66,39.877809], 
            zoom: 9,
            speed: 0.5
        });
    });
    document.getElementById('CAM').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.95,39.803], 
          zoom: 9,
          speed: 0.5
      });
    });
      document.getElementById('GLO').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.141,39.717], 
          zoom: 10,
          speed: 0.5
      });
    });
      document.getElementById('MER').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.701,40.283], 
          zoom: 9,
          speed: 0.5
      });
    });
// Burlington County
    document.getElementById('BUC_I095').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.934651,40.083523],
          zoom: 11,
          speed: 0.5
      });
    });
      document.getElementById('BUC_I295').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.879212,40.1930960001],
          zoom: 11,
          speed: 0.5
      });
    });
      document.getElementById('BUC_US001').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.879212,40.1930960001],
          zoom: 11,
          speed: 0.5
      });
    });
      document.getElementById('BUC_US013').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.8124830002,40.1738419999],
          zoom: 12,
          speed: 0.5
      });
    });
    document.getElementById('BUC_US202').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.1243709995,40.2996050002],
          zoom: 13,
          speed: 0.5
      });
    });
    document.getElementById('BUC_PA063').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.9631559998,40.0733509998],
          zoom: 15,
          speed: 0.5
      });
    });    
    document.getElementById('BUC_PA309').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.3297936324,40.3532856544],
          zoom: 11,
          speed: 0.5
      });
    }); 
    document.getElementById('BUC_PA611').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.142324,40.305509],
          zoom: 12,
          speed: 0.5
      });
    }); 
// Chester
      document.getElementById('CHE_US001').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.8766136156,39.8267931362],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('CHE_US030').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.7598402177,40.0061459498],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('CHE_US202').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.501410,40.017994],
          zoom: 10,
          speed: 0.5
      });
    });    
     document.getElementById('CHE_US422').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.4858576858,40.1638485564],
          zoom: 10,
          speed: 0.5
      });
    });  
    document.getElementById('CHE_PA100').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.6608889997,40.2303680002],
          zoom: 12,
          speed: 0.5
      });
    }); 
// Delaware
      document.getElementById('DEL_I095').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.344236,39.867284,],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('DEL_I476').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.3357888651,39.9683093676],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('DEL_US001').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.3811900453,39.9363903359],
          zoom: 12,
          speed: 0.5
      });
    });    
    document.getElementById('DEL_US322').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-75.4158480004,39.843517],
          zoom: 14,
          speed: 0.5
      });
    });     
// Montgomery
      document.getElementById('MON_I076').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.3147700006,40.06606],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('MON_I476').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.3104238556,40.0849828479],
          zoom: 12,
          speed: 0.5
      });
    });
    document.getElementById('MON_US202').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.400737999,40.0821630009],
          zoom: 14,
          speed: 0.5
      });
    });    
    document.getElementById('MON_US422').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.4858576858,40.1638485564],
          zoom: 10,
          speed: 0.5
      });
    });  
    document.getElementById('MON_PA100').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-75.6437210004,40.2883350004],
          zoom: 11,
          speed: 0.5
      });
    });      
      document.getElementById('MON_PA309').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-75.2046551619,40.137165],
          zoom: 11,
          speed: 0.5
      });
    });  
// PHILLY
      document.getElementById('PHI_I076').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.1820350003,39.9610589997],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('PHI_I095').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.0957349995,39.984336],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('PHI_I676').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.1587904613,39.9573379444],
          zoom: 13,
          speed: 0.5
      });
    });    
    document.getElementById('PHI_US001').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-75.1704750001,40.0179950001],
          zoom: 13,
          speed: 0.5
      });
    });  
    document.getElementById('PHI_PA063').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-74.9779280004,40.0921539998],
          zoom: 13,
          speed: 0.5
      });
    });  
      document.getElementById('PHI_Bridges').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.199120,39.930980],
          zoom: 11,
          speed: 0.5
      });
    });        
