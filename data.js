var APP_DATA = {
  "scenes": [
    {
      "id": "0-planta-baja-",
      "name": "planta baja ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.476172093305646,
          "pitch": 0.24643005028828746,
          "rotation": 0,
          "target": "1-acceso"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6888231784659702,
          "pitch": 0.4768328435933693,
          "title": "pavimento&nbsp;",
          "text": "madera pino con terminacion laca<div><br></div>"
        }
      ]
    },
    {
      "id": "1-acceso",
      "name": "acceso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 512,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7784274989929614,
          "pitch": 0.22402620491694236,
          "rotation": 0,
          "target": "0-planta-baja-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.783581185396539,
          "pitch": -0.06896189977112854,
          "title": "circulacion exterior&nbsp;",
          "text": "escalera caracol&nbsp;"
        },
        {
          "yaw": -1.8404837804050622,
          "pitch": -0.12026133481353796,
          "title": "terminacion exterior&nbsp;",
          "text": "piedra natural"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
