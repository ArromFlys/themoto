TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D",
  "hfovMin": 60,
  "adjacentPanoramas": [
   {
    "backwardYaw": 23.83,
    "panorama": {
     "id": "panorama_3C189116_33BE_F3F3_41BB_221202100968",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": -6.39,
       "panorama": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D",
       "yaw": -5.31,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "height": 1000,
            "width": 1000,
            "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_3C189116_33BE_F3F3_41BB_221202100968_tcap0",
         "angle": 0,
         "hfov": 45,
         "inertia": false
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -5.31,
           "hfov": 7.57,
           "pitch": 2.72
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_26E10073_35F4_93F1_41C6_5F037A50ABA6",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Beach Aerial View"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -5.31,
           "hfov": 7.57,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 135,
              "width": 135,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 2.72
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 44,
              "width": 44,
              "url": "media/panorama_3C189116_33BE_F3F3_41BB_221202100968_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 176.53,
           "hfov": 4.94,
           "pitch": -0.51
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_26D168CD_35FB_9311_41C5_92B19E243BD6",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.startPanoramaWithCamera(this.panorama_3D6E62EC_33EF_5657_41C9_5A1016D29CC6, this.camera_368F2B12_3B16_D653_41B2_1F52FFEFE6E7)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Bathroom"
          }
         ],
         "rollOverDisplay": false,
         "items": [
          {
           "yaw": 176.53,
           "hfov": 4.94,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 88,
              "width": 88,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -0.51
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "Beach Bungalow  Bedroom",
     "vfov": 180
    },
    "yaw": 112.56,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": -107.02,
    "panorama": {
     "id": "panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": -6.39,
       "panorama": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D",
       "yaw": -62.81,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": -180,
       "panorama": {
        "id": "panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -107.02,
          "panorama": "this.panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F",
          "yaw": 128.89,
          "distance": 1,
          "class": "AdjacentPanorama"
         },
         {
          "backwardYaw": 24.76,
          "panorama": {
           "id": "panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554",
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": 173.78,
             "panorama": {
              "id": "panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1",
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": 24.76,
                "panorama": "this.panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554",
                "yaw": 5.95,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": 31.63,
                "panorama": {
                 "id": "panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3",
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 173.78,
                   "panorama": "this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1",
                   "yaw": 113.67,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_t.jpg",
                 "hfov": 360,
                 "pitch": 0,
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_t.jpg",
                   "sphere": {
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "image": {
                      "levels": [
                       {
                        "height": 1000,
                        "width": 1000,
                        "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "id": "panorama_31D53B7F_386C_CE0B_41C8_81DBD76C7C3A",
                     "angle": 0,
                     "hfov": 38.4,
                     "inertia": false
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "url": "media/panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": 113.67,
                       "hfov": 6.53,
                       "pitch": 3.48
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_291D9364_3864_5E3D_41B5_007DF64672E3",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.mainPlayList.set('selectedIndex', 11)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "Living Room"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 113.67,
                       "hfov": 6.53,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 117,
                          "width": 117,
                          "url": "media/horloo.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 3.48
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMax": 120,
                 "label": "Mangsit Suite Double Bedroom",
                 "vfov": 180
                },
                "yaw": -56.95,
                "distance": 1,
                "class": "AdjacentPanorama"
               },
               {
                "backwardYaw": -57.76,
                "panorama": {
                 "id": "panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6",
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 59.89,
                   "panorama": "this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1",
                   "yaw": -57.76,
                   "distance": 1,
                   "class": "AdjacentPanorama"
                  }
                 ],
                 "class": "Panorama",
                 "thumbnailUrl": "media/panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_t.jpg",
                 "hfov": 360,
                 "pitch": 0,
                 "partial": false,
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_t.jpg",
                   "sphere": {
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "url": "media/panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_hq.jpeg",
                      "class": "ImageResourceLevel"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "url": "media/panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6.jpeg",
                      "class": "ImageResourceLevel"
                     }
                    ],
                    "class": "ImageResource"
                   },
                   "overlays": [
                    {
                     "image": {
                      "levels": [
                       {
                        "height": 1000,
                        "width": 1000,
                        "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
                        "class": "ImageResourceLevel"
                       }
                      ],
                      "class": "ImageResource"
                     },
                     "rotate": false,
                     "class": "TripodCapPanoramaOverlay",
                     "id": "panorama_31CC8407_386C_59FB_41BE_62424BB5F537",
                     "angle": 0,
                     "hfov": 34.8,
                     "inertia": false
                    },
                    {
                     "useHandCursor": true,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "image": {
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "url": "media/panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_0_HS_0_0_0_map.gif",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "yaw": -57.76,
                       "hfov": 6.5,
                       "pitch": 1.24
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "id": "overlay_2986204C_3864_5A0D_41BB_1F907F90CB55",
                     "areas": [
                      {
                       "displayTooltipInTouchScreens": true,
                       "click": "this.startPanoramaWithCamera(this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1, this.camera_95EA3725_9B69_2A30_41C9_1D17C833AB0B); this.mainPlayList.set('selectedIndex', 11)",
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "toolTip": "Living Room"
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": -57.76,
                       "hfov": 6.5,
                       "class": "HotspotPanoramaOverlayImage",
                       "image": {
                        "levels": [
                         {
                          "height": 116,
                          "width": 116,
                          "url": "media/horloo.png",
                          "class": "ImageResourceLevel"
                         }
                        ],
                        "class": "ImageResource"
                       },
                       "pitch": 1.24
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMax": 120,
                 "label": "Mangsit Suite Twin Bedroom",
                 "vfov": 180
                },
                "yaw": 59.89,
                "distance": 1,
                "class": "AdjacentPanorama"
               }
              ],
              "class": "Panorama",
              "thumbnailUrl": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_t.jpg",
              "hfov": 360,
              "pitch": 0,
              "partial": false,
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_t.jpg",
                "sphere": {
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "url": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_hq.jpeg",
                   "class": "ImageResourceLevel"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "url": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1.jpeg",
                   "class": "ImageResourceLevel"
                  }
                 ],
                 "class": "ImageResource"
                },
                "overlays": [
                 {
                  "image": {
                   "levels": [
                    {
                     "height": 1000,
                     "width": 1000,
                     "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
                     "class": "ImageResourceLevel"
                    }
                   ],
                   "class": "ImageResource"
                  },
                  "rotate": false,
                  "class": "TripodCapPanoramaOverlay",
                  "id": "panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_tcap0",
                  "angle": 0,
                  "hfov": 36,
                  "inertia": false
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "url": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_0_HS_0_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": -56.95,
                    "hfov": 6.59,
                    "pitch": 1.44
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_37DA054C_387C_5A0D_41CA_27AB89110D0E",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.mainPlayList.set('selectedIndex', 12)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Double Bedroom"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -56.95,
                    "hfov": 6.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 117,
                       "url": "media/horloo.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 1.44
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "url": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_0_HS_1_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 59.89,
                    "hfov": 6.59,
                    "pitch": 2.83
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_28B3FA12_3863_CE15_41BC_55FB0B2861EF",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.startPanoramaWithCamera(this.panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6, this.camera_95F94714_9B69_2A10_41DE_D2C551BD5996); this.mainPlayList.set('selectedIndex', 13)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Twin Bedroom"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 59.89,
                    "hfov": 6.59,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 117,
                       "url": "media/horloo.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 2.83
                   }
                  ]
                 },
                 {
                  "useHandCursor": true,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "image": {
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "url": "media/panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_0_HS_2_0_0_map.gif",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "yaw": 5.95,
                    "hfov": 6.58,
                    "pitch": 3.96
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_2855195E_3864_4A0D_41B4_10D5E3054187",
                  "areas": [
                   {
                    "displayTooltipInTouchScreens": true,
                    "click": "this.mainPlayList.set('selectedIndex', 4)",
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "toolTip": "Mangsit Suite Aerial View"
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 5.95,
                    "hfov": 6.58,
                    "class": "HotspotPanoramaOverlayImage",
                    "image": {
                     "levels": [
                      {
                       "height": 117,
                       "width": 117,
                       "url": "media/horloo.png",
                       "class": "ImageResourceLevel"
                      }
                     ],
                     "class": "ImageResource"
                    },
                    "pitch": 3.96
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMax": 120,
              "label": "Mangsit Suite Living Room",
              "vfov": 180
             },
             "yaw": -146.98,
             "distance": 1,
             "class": "AdjacentPanorama"
            },
            {
             "backwardYaw": -180,
             "panorama": "this.panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187",
             "yaw": 1.82,
             "distance": 1,
             "class": "AdjacentPanorama"
            }
           ],
           "class": "Panorama",
           "thumbnailUrl": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_t.jpg",
           "hfov": 360,
           "pitch": -20.31,
           "partial": false,
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_t.jpg",
             "sphere": {
              "levels": [
               {
                "height": 2472,
                "width": 6434,
                "url": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_hq.jpeg",
                "class": "ImageResourceLevel"
               },
               {
                "height": 1236,
                "width": 3217,
                "url": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554.jpeg",
                "class": "ImageResourceLevel"
               }
              ],
              "class": "ImageResource"
             },
             "overlays": [
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 48,
                    "width": 48,
                    "url": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_0_HS_0_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": -146.98,
                 "hfov": 5.25,
                 "pitch": -13.49
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_26713D3A_35F4_6D73_41B7_20B57DAB3F20",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 11)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "Mangsit Suite "
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -146.98,
                 "hfov": 5.25,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 96,
                    "width": 96,
                    "url": "media/horloo.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": -13.49
                }
               ]
              },
              {
               "useHandCursor": true,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "image": {
                  "levels": [
                   {
                    "height": 48,
                    "width": 48,
                    "url": "media/panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_0_HS_1_0_0_map.gif",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "yaw": 1.82,
                 "hfov": 5.34,
                 "pitch": 8.24
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_36413803_3864_49FB_41C4_1F5DE62D8ED7",
               "areas": [
                {
                 "displayTooltipInTouchScreens": true,
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "toolTip": "Garden Aerial View"
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 1.82,
                 "hfov": 5.34,
                 "class": "HotspotPanoramaOverlayImage",
                 "image": {
                  "levels": [
                   {
                    "height": 96,
                    "width": 96,
                    "url": "media/horloo.png",
                    "class": "ImageResourceLevel"
                   }
                  ],
                  "class": "ImageResource"
                 },
                 "pitch": 8.24
                }
               ]
              }
             ]
            }
           ],
           "hfovMax": 120,
           "label": "Mangsit Suite Aerial View",
           "vfov": 138.29
          },
          "yaw": -49.72,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_t.jpg",
        "hfov": 360,
        "pitch": -20.18,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 2478,
             "width": 6434,
             "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1239,
             "width": 3217,
             "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -49.72,
              "hfov": 5.33,
              "pitch": -9.15
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_25E17EDB_342F_AF31_41B0_9AA8F2314541",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Aerial Mangsit Suite View"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -49.72,
              "hfov": 5.33,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -9.15
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 128.89,
              "hfov": 4.74,
              "pitch": -28.72
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_24314C7C_3414_B3F7_41AA_8219D3103041",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Main Pool"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 128.89,
              "hfov": 4.74,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -28.72
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_2_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -165.68,
              "hfov": 4.21,
              "pitch": -38.7
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_24074218_3414_F73F_41C9_1464BBCCCF0E",
            "areas": [
             {
              "toolTip": "Ocean View Room",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -165.68,
              "hfov": 4.21,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -38.7
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_3_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 83.79,
              "hfov": 5.17,
              "pitch": -16.72
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_25BD04DD_3414_9331_41A9_E3C8C98B5B03",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Cabana Pool"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 83.79,
              "hfov": 5.17,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -16.72
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_4_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -146.98,
              "hfov": 5.34,
              "pitch": -8.89
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_25B2798C_341B_9517_41AC_3A1E1CB1E020",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Beach Garden Suite"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -146.98,
              "hfov": 5.34,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -8.89
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_0_HS_5_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 171.46,
              "hfov": 5.17,
              "pitch": -16.85
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_252C8049_341D_B310_41B7_892A0659AFD9",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 5)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Beacvh Bungalow"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 171.46,
              "hfov": 5.17,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 96,
                 "width": 96,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -16.85
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "Garden Arerial View ",
        "vfov": 138.6
       },
       "yaw": 83.59,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "height": 1000,
            "width": 1000,
            "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_tcap0",
         "angle": 3,
         "hfov": 45.6,
         "inertia": false
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -62.81,
           "hfov": 5.76,
           "pitch": 27.75
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_263BD501_35EF_9D11_4168_8EBF81C8E6A9",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Aerial Beach View"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -62.81,
           "hfov": 5.76,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 116,
              "width": 116,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 27.75
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 83.59,
           "hfov": 6.3,
           "pitch": 14.62
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_2611529E_35ED_9733_4191_85323D95F049",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 1)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Aerial Garden View"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 83.59,
           "hfov": 6.3,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 116,
              "width": 116,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 14.62
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "Main Pool",
     "vfov": 180
    },
    "yaw": 140.6,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": -180,
    "panorama": {
     "id": "panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": -134.55,
       "panorama": {
        "id": "panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1",
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -180,
          "panorama": "this.panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F",
          "yaw": -158.16,
          "distance": 1,
          "class": "AdjacentPanorama"
         }
        ],
        "class": "Panorama",
        "thumbnailUrl": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_t.jpg",
        "hfov": 360,
        "pitch": 0,
        "partial": false,
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_t.jpg",
          "sphere": {
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "url": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_hq.jpeg",
             "class": "ImageResourceLevel"
            },
            {
             "height": 1608,
             "width": 3217,
             "url": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1.jpeg",
             "class": "ImageResourceLevel"
            }
           ],
           "class": "ImageResource"
          },
          "overlays": [
           {
            "image": {
             "levels": [
              {
               "height": 1000,
               "width": 1000,
               "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
               "class": "ImageResourceLevel"
              }
             ],
             "class": "ImageResource"
            },
            "rotate": false,
            "class": "TripodCapPanoramaOverlay",
            "id": "panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_tcap0",
            "angle": 0,
            "hfov": 25.2,
            "inertia": false
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_0_HS_0_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": 85,
              "hfov": 6.54,
              "pitch": -2.07
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_21C3CCAB_35F4_9311_41B9_5DCE990C6B4B",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 10)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Bathroom"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": 85,
              "hfov": 6.54,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 117,
                 "width": 117,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": -2.07
             }
            ]
           },
           {
            "useHandCursor": true,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "image": {
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "url": "media/panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_0_HS_1_0_0_map.gif",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "yaw": -158.16,
              "hfov": 6.54,
              "pitch": 2.35
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_20089304_35F7_B517_41B9_C92A603F7EA0",
            "areas": [
             {
              "displayTooltipInTouchScreens": true,
              "click": "this.mainPlayList.set('selectedIndex', 8)",
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "toolTip": "Living Room"
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -158.16,
              "hfov": 6.54,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "levels": [
                {
                 "height": 117,
                 "width": 117,
                 "url": "media/horloo.png",
                 "class": "ImageResourceLevel"
                }
               ],
               "class": "ImageResource"
              },
              "pitch": 2.35
             }
            ]
           }
          ]
         }
        ],
        "hfovMax": 120,
        "label": "Beach Garden Suite Master Bedroom",
        "vfov": 180
       },
       "yaw": 35.87,
       "distance": 1,
       "class": "AdjacentPanorama"
      },
      {
       "backwardYaw": -6.39,
       "panorama": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D",
       "yaw": -94.26,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 18,
              "width": 16,
              "url": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -94.26,
           "hfov": 6.5,
           "pitch": 3.73
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_36FCC5F2_387C_DA15_41CB_DD7388FAFAD0",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Beach Aerial View"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -94.26,
           "hfov": 6.5,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 135,
              "width": 116,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 3.73
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 67,
              "width": 67,
              "url": "media/panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 35.87,
           "hfov": 7.57,
           "pitch": -3.09
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_3766D27B_387C_5E0B_41C7_71BE97ED26F1",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Master Bedroom"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 35.87,
           "hfov": 7.57,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 135,
              "width": 135,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": -3.09
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "Beach Garden Suite Living Room",
     "vfov": 180
    },
    "yaw": 94.62,
    "distance": 1,
    "class": "AdjacentPanorama"
   },
   {
    "backwardYaw": -91.44,
    "panorama": {
     "id": "panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F",
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": -6.39,
       "panorama": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D",
       "yaw": -44.34,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "class": "Panorama",
     "thumbnailUrl": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_t.jpg",
     "hfov": 360,
     "pitch": 0,
     "partial": false,
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_t.jpg",
       "sphere": {
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_hq.jpeg",
          "class": "ImageResourceLevel"
         },
         {
          "height": 1608,
          "width": 3217,
          "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F.jpeg",
          "class": "ImageResourceLevel"
         }
        ],
        "class": "ImageResource"
       },
       "overlays": [
        {
         "image": {
          "levels": [
           {
            "height": 1000,
            "width": 1000,
            "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "rotate": false,
         "class": "TripodCapPanoramaOverlay",
         "id": "panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0",
         "angle": 0,
         "hfov": 31.2,
         "inertia": false
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_0_HS_0_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": 14.27,
           "hfov": 6.54,
           "pitch": 4.49
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_26BC870E_341C_BD13_41A0_2F7DACB3ABEB",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 3)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Main Pool"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 14.27,
           "hfov": 6.54,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 117,
              "width": 117,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 4.49
          }
         ]
        },
        {
         "useHandCursor": true,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "image": {
            "levels": [
             {
              "height": 16,
              "width": 16,
              "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_0_HS_1_0_0_map.gif",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "yaw": -44.34,
           "hfov": 5.56,
           "pitch": 32.02
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_26C66366_341B_B513_41BA_B8C10C097AC7",
         "areas": [
          {
           "displayTooltipInTouchScreens": true,
           "click": "this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "toolTip": "Aerial Beach View"
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -44.34,
           "hfov": 5.56,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "levels": [
             {
              "height": 117,
              "width": 117,
              "url": "media/horloo.png",
              "class": "ImageResourceLevel"
             }
            ],
            "class": "ImageResource"
           },
           "pitch": 32.02
          }
         ]
        }
       ]
      }
     ],
     "hfovMax": 120,
     "label": "Cabana Pool",
     "vfov": 180
    },
    "yaw": -138.94,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_t.jpg",
  "hfov": 360,
  "pitch": -20.55,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2462,
       "width": 6434,
       "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1231,
       "width": 3217,
       "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 140.6,
        "hfov": 4.89,
        "pitch": -23.34
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3AB1966A_342C_BF13_41C4_6D977DAD2D19",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Main Pool"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 140.6,
        "hfov": 4.89,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.34
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": -138.94,
        "hfov": 5.19,
        "pitch": -12.73
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_24C17FAF_3437_AD11_41B1_2F33F39060F8",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Cabana Pool"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -138.94,
        "hfov": 5.19,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.73
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 127.21,
        "hfov": 5.29,
        "pitch": -6.66
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3AA29A77_3434_B7F1_41C4_10C56676B012",
      "areas": [
       {
        "toolTip": "Ocean View Room",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 127.21,
        "hfov": 5.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -6.66
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 112.56,
        "hfov": 5.31,
        "pitch": -3.88
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A3D1CC4_343C_F317_41A1_42A611896319",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Beach Bungalow"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 112.56,
        "hfov": 5.31,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.88
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 155.76,
        "hfov": 5.31,
        "pitch": -4.26
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3A1910CC_343F_9317_41B5_B427A8CE5211",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Garden Aerial View"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 155.76,
        "hfov": 5.31,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -4.26
       }
      ]
     },
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_0_HS_6_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 94.62,
        "hfov": 5.31,
        "pitch": -3.38
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3B8F79D3_343C_7531_41C8_10AB101EBFF7",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Beach Garden Suite "
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 94.62,
        "hfov": 5.31,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 95,
           "width": 95,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.38
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "Beach Aerial View",
  "vfov": 137.7
 },
 {
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "id": "MainViewerPanoramaPlayer",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.61,
   "pitch": -22.74
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 88.56,
   "pitch": 3.57
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 72.98,
   "pitch": -4.27
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.24,
   "pitch": -18.48
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3C189116_33BE_F3F3_41BB_221202100968",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -156.17,
   "pitch": -4.47
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3C189116_33BE_F3F3_41BB_221202100968_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8",
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_t.jpg",
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 1764,
       "width": 3528,
       "url": "media/panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 174.57,
        "hfov": 6.31,
        "pitch": 1.58
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_96DF1F77_9B59_5A1F_41AE_0FF654FCDA01",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Debroom"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 174.57,
        "hfov": 6.31,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 61,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 1.58
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "Beach  Bungalow Bathroom ",
  "vfov": 180
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27.03,
   "pitch": -16.38
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_9764390B_9B59_27F0_41E0_07584BE681C4",
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_9764390B_9B59_27F0_41E0_07584BE681C4_t.jpg",
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_9764390B_9B59_27F0_41E0_07584BE681C4_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_9764390B_9B59_27F0_41E0_07584BE681C4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_9764390B_9B59_27F0_41E0_07584BE681C4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 58,
           "width": 58,
           "url": "media/panorama_9764390B_9B59_27F0_41E0_07584BE681C4_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 172.54,
        "hfov": 6.52,
        "pitch": 5.63
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_95A1111A_9B5A_E610_41CD_AEF4D42BE85D",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Garden Aerial View"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 172.54,
        "hfov": 6.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 117,
           "width": 117,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 5.63
       }
      ]
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "Ocean View Bedroom",
  "vfov": 180
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_9764390B_9B59_27F0_41E0_07584BE681C4_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 45.45,
   "pitch": -13.41
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_camera",
  "class": "PanoramaCamera"
 },
 {
  "id": "panorama_3910B004_342B_F317_41C0_6B7B1F67533E",
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_3910B004_342B_F317_41C0_6B7B1F67533E_t.jpg",
  "pitch": 0,
  "partial": false,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3910B004_342B_F317_41C0_6B7B1F67533E_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3910B004_342B_F317_41C0_6B7B1F67533E_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 1608,
       "width": 3217,
       "url": "media/panorama_3910B004_342B_F317_41C0_6B7B1F67533E.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "overlays": [
     {
      "useHandCursor": true,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3910B004_342B_F317_41C0_6B7B1F67533E_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "yaw": 71.5,
        "hfov": 6.58,
        "pitch": -0.95
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_3762262C_387C_C60D_41CB_5D33C4BEAB3B",
      "areas": [
       {
        "displayTooltipInTouchScreens": true,
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "toolTip": "Living Room"
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 71.5,
        "hfov": 6.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 117,
           "width": 117,
           "url": "media/horloo.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.95
       }
      ]
     },
     {
      "image": {
       "levels": [
        {
         "height": 1000,
         "width": 1000,
         "url": "media/panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "rotate": false,
      "class": "TripodCapPanoramaOverlay",
      "id": "panorama_3910B004_342B_F317_41C0_6B7B1F67533E_tcap0",
      "angle": 0,
      "hfov": 36,
      "inertia": false
     }
    ]
   }
  ],
  "hfovMax": 120,
  "label": "Beach Garden Suite Master Bathroom",
  "vfov": 180
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 158.31,
   "pitch": -7.79
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_3910B004_342B_F317_41C0_6B7B1F67533E_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.22,
   "pitch": -16.87
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -148.37,
   "pitch": -7.48
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_camera",
  "class": "PanoramaCamera"
 },
 "this.panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6",
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -46.26,
   "pitch": -6.55
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_camera",
  "class": "PanoramaCamera"
 },
 {
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3F2E1058_33AB_5270_41B8_E9B956B9701D"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3CB5C6E4_33FF_3E57_41C0_8B09654B5187"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3994FEC9_33AE_CE51_41A7_9CB44790772F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3EC6DF37_33A7_4E31_41C2_D98A5EF34F3F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "camera": "this.panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3AC31AA0_347B_76CF_41A1_68C82AF13554"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "camera": "this.panorama_3C189116_33BE_F3F3_41BB_221202100968_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3C189116_33BE_F3F3_41BB_221202100968"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "camera": "this.panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_91D6A08D_9B5A_E6F0_41C4_D478E639DFD8"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "camera": "this.panorama_9764390B_9B59_27F0_41E0_07584BE681C4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_9764390B_9B59_27F0_41E0_07584BE681C4"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "camera": "this.panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_33F2F8BF_386C_CA0B_41C1_28BB8D61A25F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "camera": "this.panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3D942504_33E6_F3D7_41A8_C8FADEEC84D1"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "camera": "this.panorama_3910B004_342B_F317_41C0_6B7B1F67533E_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3910B004_342B_F317_41C0_6B7B1F67533E"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "camera": "this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_225325B5_33AA_D231_41BB_CFD7B121C4D1"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "camera": "this.panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_31D52B7E_386C_CE0A_41A6_39EEBBF825C3"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 0)",
    "camera": "this.panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_31CCA407_386C_59FB_41CA_24A4F43D87F6"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 122.24,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_95F94714_9B69_2A10_41DE_D2C551BD5996",
  "class": "PanoramaCamera"
 },
 {
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -120.11,
   "pitch": 0
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "easing": "cubic_in",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "linear",
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "easing": "cubic_out",
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_95EA3725_9B69_2A30_41C9_1D17C833AB0B",
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipBorderColor": "#767676",
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipTextShadowBlurRadius": 3,
  "paddingRight": 0,
  "playbackBarBorderRadius": 0,
  "shadow": false,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "toolTipShadowVerticalLength": 0,
  "paddingBottom": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressOpacity": 1,
  "progressLeft": 0,
  "toolTipTextShadowOpacity": 0,
  "width": "100%",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundOpacity": 1,
  "playbackBarLeft": 0,
  "paddingTop": 0,
  "toolTipShadowSpread": 0,
  "playbackBarHeadHeight": 15,
  "height": "100%",
  "toolTipFontStyle": "normal",
  "paddingLeft": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "progressRight": 0,
  "progressOpacity": 1,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "toolTipFontFamily": "Arial",
  "id": "MainViewer",
  "playbackBarHeadShadow": true,
  "progressBackgroundColorDirection": "vertical",
  "toolTipBorderSize": 1,
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "playbackBarBottom": 5,
  "minHeight": 50,
  "progressBackgroundOpacity": 1,
  "progressBorderColor": "#000000",
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarOpacity": 1,
  "borderRadius": 0,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBottom": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "minWidth": 100,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarHeight": 10,
  "toolTipBorderRadius": 3,
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBorderSize": 0,
  "progressBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "transitionMode": "blending",
  "borderSize": 0,
  "toolTipShadowColor": "#333333"
 }
], 
 "backgroundPreloadEnabled": true,
 "id": "rootPlayer",
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scripts": {
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "existsKey": function(key){  return key in window; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); }
 },
 "paddingRight": 0,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "minHeight": 20,
 "shadow": false,
 "gap": 10,
 "horizontalAlign": "left",
 "borderRadius": 0,
 "overflow": "visible",
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "layout": "absolute",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "width": "100%",
 "contentOpaque": false,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "height": "100%",
 "scrollBarMargin": 2,
 "paddingLeft": 0,
 "borderSize": 0,
 "mouseWheelEnabled": true
})