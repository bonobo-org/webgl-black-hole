import * as THREE from 'three'

import vertexShader from '../shaders/blackHoleDisc/vertex.glsl'
import fragmentShader from '../shaders/blackHoleDisc/fragment.glsl'

function BlackHoleDiscMaterial()
{
    const material = new THREE.RawShaderMaterial({
        glslVersion: THREE.GLSL3,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        transparent: false,
        uniforms:
        {
            uTime: { value: 0 },
            uNoiseTexture: { value: null },
            uInnerColor: { value: new THREE.Color('#000000') },
            uOuterColor: { value: new THREE.Color('#000000') }
        },
        vertexShader: vertexShader,
        fragmentShader: fragmentShader
    })

    return material
}

export default BlackHoleDiscMaterial