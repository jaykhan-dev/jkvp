---
sidebar: auto
---

# The Smartest City

## Prototype

This project was made with VueJS, ThreeJS, and GSAP.  This was a great project for learning purposes.  It certainly gave me a new outlook on what is possible with Vue and expanded my knowledge in creating components, adding 3D graphics, and using modern JavaScript animation techniques with GSAP. 

[See Prototype](https://thesmartestcity.netlify.app/about)

![The Smartest City home](/images/work/the-smartest-city/the-smartest-city.png)

## About the company

[See Official Site](https://trigan.org/)

From their official site:

>We have designed and are developing our own layer 1 blockchain. The Trigan blockchain is intended to address the major issues which plague current blockchain solutions. Our blockchain will be safer, faster and with far greater utility than existing blockchains, yet will also be fully decentralised.

## GSAP

[GSAP Official site](https://greensock.com/gsap/)

>A robust JavaScript toolset that turns developers into animation superheroes.  We obsess about performance, compatibility, and support so that you don't have to.

### [Showcase](https://greensock.com/showcase/)

It's really worth checking out what GSAP is capable of.  I learnt a lot from just browsing other projects which inspired me to try and build something similar. Gsap can be a bit tricky but the once you get over the initial learning curve, it can fun and intuitive to use. 

GSAP uses the following technologies to create stunning animations:
1. SVG
2. WebGL
3. Canvas

## Three JS

[Three JS official site](https://threejs.org/)

Three JS is a powerful JavaScript library that allows developers to create 3D scenes on the web.  

From their official docs:

>Three.js is often confused with WebGL since more often than not, but not always, three.js uses WebGL to draw 3D. WebGL is a very low-level system that only draws points, lines, and triangles. To do anything useful with WebGL generally requires quite a bit of code and that is where three.js comes in. It handles stuff like scenes, lights, shadows, materials, textures, 3d math, all things that you'd have to write yourself if you were to use WebGL directly.

### 3D City

[See live version](https://thesmartestcity.netlify.app)

This code snippet is used to create a 3D scene in HTML using [Trois JS](https://troisjs.github.io/), which is essentially Three JS for Vue JS.  The important thing to notice here is that in order to build out a scene, you have to use HTML tags like `<Render></Render>` rather than vanilla JavaScript.  

```html
<Renderer ref="renderer" resize pointer antialias alpha :orbit-ctrl="{ autoRotate: false, enableDamping: true, dampingFactor: 0.05 }" class="absolute top-0 z-0 bg-blue-600">
    <Camera :position="{ x: 0, y: 0, z: 10 }"/>
    <Scene background="#000000">
        <PointLight ref="light" :intensity="1.0" :position="{ x: 0, y: 0, z: 0 }">
            <Sphere :radius="0.5" />
        </PointLight>
        <Group :rotation="{ x: -Math.PI / 2, y: 0, z: 0 }">
            <RectAreaLight color="#0060ff" :position="{ x: 10, y: 0, z: 1 }" v-bind="rectLightsProps" />
            <RectAreaLight color="#60ff60" :position="{ x: -10, y: 0, z: 1 }" v-bind="rectLightsProps" />
            <Plane :width="30" :height="30" :rotation="{ x: 0 }" :position="{ y: 1, z: -1 }">
            <StandardMaterial :props="{ displacementScale: 0.2, roughness: 0, metalness: 0 }">                        
                <Texture :props="texturesProps" src="https://khanquest-heroku.s3.amazonaws.com/images/Wood_Tiles_002_basecolor.max-165x165.jpg" />
                <Texture :props="texturesProps" src="https://khanquest-heroku.s3.amazonaws.com/images/Wood_Tiles_002_height.max-165x165.png" name="displacementMap" />
                <Texture :props="texturesProps" src="https://khanquest-heroku.s3.amazonaws.com/images/Wood_Tiles_002_normal.max-165x165.jpg" name="normalMap" />
            </StandardMaterial>                    
            </Plane>
        </Group>
        <GltfModel
            src="https://khanquest-heroku.s3.ca-central-1.amazonaws.com/city_out_of_iphone.gltf"
            @load="onReady"
            @progress="onProgress"
            @error="onError"
            :position="{ x: 0, y: -2, z: 0 }"
        />
    </Scene>
    <EffectComposer>
        <RenderPass />
        <UnrealBloomPass :strength="0.3" />
        <FXAAPass />
    </EffectComposer>
</Renderer>
```

Since Trois JS is based on Three JS, we must import the navigation controls and three js objects to make the scene work.  The `{ GLTFLoader }` is used to import a 3D model made with [Blender](https://www.blender.org/).

```js
import Navigation from '../components/Navigation.vue'
import { Object3D, MathUtils, Vector3, RepeatWrapping  } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
//import { CSS3DObject } from 'three-css3drenderer'
//import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js'
const { randFloat: rnd, randFloatSpread: rndFS } = MathUtils
```

The following list if for Trois JS specifically. 

```js
import {
    FXAAPass,
    AmbientLight,
    BoxGeometry,
    Camera,
    EffectComposer,
    HalftonePass,
    InstancedMesh,
    PhongMaterial,
    PointLight,
    Renderer,
    RenderPass,
    StandardMaterial,
    Scene,
    Text,
    UnrealBloomPass,
    Sphere,
    Group, 
    RectAreaLight,
    Plane, 
    Texture,
    GltfModel,
 } from 'troisjs'
 ```


In Vue JS, there are some settings which need to be configured in order for the scene to function.  In the data property, we must return value for the textures, and lights. Finally, we must use `mounted()` to render the scene above.  

 ```js
 export default {
    name: "Hero",
    // ...
    data() {
        return {
            texturesProps: {
            repeat: { x: 10, y: 10 },
            wrapS: RepeatWrapping,
            wrapT: RepeatWrapping,
            },
            rectLightsProps: {
                // rotation: { x: -Math.PI / 2 },
                lookAt: { x: 0, y: 0, z: 1 },
                intensity: 5,
                width: 5,
                height: 5,
                helper: true,
            },
      }
    },
    //setup() {},
    mounted() {
        const renderer = this.$refs.renderer;
        const light = this.$refs.light.light;
        const pointerV3 = renderer.three.pointer.positionV3;
        renderer.onBeforeRender(() => {
        light.position.copy(pointerV3);
        });    
    },
    //methods: {},   
}


