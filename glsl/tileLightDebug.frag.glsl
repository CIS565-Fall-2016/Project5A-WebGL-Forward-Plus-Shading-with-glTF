#version 100

precision highp float;
precision highp int;

#define TILE_SIZE 16
// #define FULL_COLOR_SCALE_VALUE 10

uniform int u_numLights;

// size of screen fb, texture
uniform int u_textureWidth;
uniform int u_textureHeight;

uniform sampler2D u_tileLightsTexture;

void main() 
{
    // TODO
}