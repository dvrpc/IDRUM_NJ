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
          zoom: 10,
          speed: 0.5
      });
    });
// Burlington County
      document.getElementById('BUR_I295').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.7913281453,40.0674009448],
          zoom: 10,
          speed: 0.5
      });
    });
      document.getElementById('BUR_US009').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.4366988763,39.5936565432],
          zoom: 12,
          speed: 0.5
      });
    });
      document.getElementById('BUR_US130').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.8167957157,40.0922719429],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('BUR_US206').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.743389986,39.9402854117],
          zoom: 9,
          speed: 0.5
      });
    });
    document.getElementById('BUR_NJ038').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.8607818875,39.9718435049],
          zoom: 11,
          speed: 0.5
      });
    });    
    document.getElementById('BUR_NJ068').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.6525715615,40.0631605597],
          zoom: 12,
          speed: 0.5
      });
    }); 
    document.getElementById('BUR_NJ070').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.8031512304,39.9024665672],
          zoom: 10,
          speed: 0.5
      });
    }); 
    document.getElementById('BUR_NJ072').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center: [-74.5031204106,39.8526844846],
        zoom: 12,
        speed: 0.5
    });
  }); 
  document.getElementById('BUR_NJ073').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center: [-74.9727639056,39.9394013851],
        zoom: 11,
        speed: 0.5
    });
  }); 
// Camden
     document.getElementById('CAM_I076').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.1051660357,39.8895400544],
          zoom: 12,
          speed: 0.5
      });
    });
    document.getElementById('CAM_I295').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.025,39.895],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('CAM_I676').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.1161023002,39.924594947],
          zoom: 12,
          speed: 0.5
      });
    });    
     document.getElementById('CAM_US030').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.9721151881,39.8072173822],
          zoom: 10,
          speed: 0.5
      });
    });  
    document.getElementById('CAM_US130').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.088,39.936],
          zoom: 11,
          speed: 0.5
      });
    }); 
    document.getElementById('CAM_NJ038').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center: [-75.0167882545,39.9396265152],
        zoom: 11,
        speed: 0.5
    });
  });  
  document.getElementById('CAM_NJ070').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center: [-74.993,39.912],
        zoom: 11,
        speed: 0.5
    });
  }); 
  document.getElementById('CAM_NJ073').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.909,39.753],
      zoom: 11,
      speed: 0.5
  });
});  
document.getElementById('CAM_NJ143').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.852856412,39.683021745],
      zoom: 12,
      speed: 0.5
  });
}); 
document.getElementById('CAM_NJ154').addEventListener('click', function () {
  $("div h4:contains('Remove Filter')").show();
map.flyTo({
    center: [-75.0138166715,39.9015784649],
    zoom: 12,
    speed: 0.5
});
});  
document.getElementById('CAM_NJ168').addEventListener('click', function () {
  $("div h4:contains('Remove Filter')").show();
map.flyTo({
    center: [-75.0674677002,39.8296360607],
    zoom: 11,
    speed: 0.5
});
}); 
// Gloucester
    document.getElementById('GLO_I295').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.2607535916,39.814598122],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('GLO_NJTP').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.2140500721,39.7897135231],
          zoom: 10,
          speed: 0.5
      });
    });
    document.getElementById('GLO_US040').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-75.0235028835,39.5622949519],
          zoom: 11,
          speed: 0.5
      });
    });    
    document.getElementById('GLO_US130').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-75.270697206,39.8124712833],
          zoom: 11,
          speed: 0.5
      });
    });    
    document.getElementById('GLO_US322').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center:[-75.1283226697,39.711452715],
        zoom: 10,
        speed: 0.5
    });
  });   
  document.getElementById('GLO_NJ041').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.0912255618,39.819509714],
      zoom: 12,
      speed: 0.5
  });
});   
  document.getElementById('GLO_NJ042').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.0488252967,39.777073956],
      zoom: 10,
      speed: 0.5
  });
  });   
  document.getElementById('GLO_NJ044').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.2608747176,39.826272916],
      zoom: 11,
      speed: 0.5
  });
  });   
  document.getElementById('GLO_NJ045').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.2072997348,39.7584133983],
      zoom: 10,
      speed: 0.5
  });
  });   
  document.getElementById('GLO_NJ047').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.1080619282,39.7054906874],
      zoom: 10,
      speed: 0.5
  });
  });   
  document.getElementById('GLO_NJ055').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.1351593674,39.6838354527],
      zoom: 10,
      speed: 0.5
  });
  });   
  document.getElementById('GLO_NJ077').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-75.2065778902,39.6911977195],
      zoom: 11,
      speed: 0.5
  });
  });   
// Mercer
       document.getElementById('MER_I195').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.6469615801,40.2030996323],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('MER_I295').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.771,40.245],
          zoom: 11,
          speed: 0.5
      });
    });
    document.getElementById('MER_NJTP').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.5155786307,40.2533731774],
          zoom: 11,
          speed: 0.5
      });
    });    
    document.getElementById('MER_US001').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center: [-74.6246614428,40.3425423319],
          zoom: 12,
          speed: 0.5
      });
    });  
    document.getElementById('MER_US001BUS').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-74.7502484189,40.2388805507],
          zoom: 10,
          speed: 0.5
      });
    });      
    document.getElementById('MER_US130').addEventListener('click', function () {
        $("div h4:contains('Remove Filter')").show();
      map.flyTo({
          center:[-74.5927354789,40.2325907369],
          zoom: 11,
          speed: 0.5
      });
    });  
    document.getElementById('MER_US206').addEventListener('click', function () {
      $("div h4:contains('Remove Filter')").show();
    map.flyTo({
        center:[-74.719,40.3],
        zoom: 10,
        speed: 0.5
    });
  });  
  document.getElementById('MER_NJ027').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.6284865366,40.3642209511],
      zoom: 12,
      speed: 0.5
  });
});
document.getElementById('MER_NJ029').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.8664857326,40.2967560403],
      zoom: 11,
      speed: 0.5
  });
});
document.getElementById('MER_NJ031').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.8,40.34],
      zoom: 11,
      speed: 0.5
  });
});    
document.getElementById('MER_NJ033').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center: [-74.6102419525,40.2228184856],
      zoom: 11,
      speed: 0.5
  });
});  
document.getElementById('MER_NJ133').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-74.5267488069,40.282275588],
      zoom: 12,
      speed: 0.5
  });
});      
document.getElementById('MER_NJ156').addEventListener('click', function () {
    $("div h4:contains('Remove Filter')").show();
  map.flyTo({
      center:[-74.668399079,40.1794146129],
      zoom: 13,
      speed: 0.5
  });
});  
document.getElementById('MER_NJ175').addEventListener('click', function () {
  $("div h4:contains('Remove Filter')").show();
map.flyTo({
    center:[-74.8397596009,40.2547146796],
    zoom: 14,
    speed: 0.5
});
});  