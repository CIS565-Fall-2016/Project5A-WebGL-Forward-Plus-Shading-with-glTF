#version 100

precision highp float;
precision highp int;


#define USE_TILE_MIN_MAX_DEPTH_CULLING 0

#define TILE_SIZE 16

varying vec2 v_uv;

uniform mat4 u_viewMatrix;
uniform mat4 u_projectionMatrix;

uniform int u_numLights; 

// size of screen fb
uniform int u_textureWidth;
uniform int u_textureHeight;

uniform sampler2D u_lightPositionTexture;   //RGB
uniform sampler2D u_lightColorRadiusTexture;    //RGBA

uniform sampler2D u_tileLightsTexture;    // RGB, store light indices in a tile

uniform sampler2D u_depthTexture;



void main() 
{
    // TODO
}