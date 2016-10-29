#version 100

precision highp float;
precision highp int;

uniform sampler2D u_depthTexture;

varying vec2 v_uv;

void main() {
    float depth = texture2D(u_depthTexture, v_uv).x;
    gl_FragColor = vec4(vec3(depth), 1.0);
}