This document specifies the data structure used by pages in MLP.
An example document can be found at ./example.json


# Title

- **text** - *String* - The text which appears in your browser's title bar.
- **effect** - *String* - An optional property to change the behavior of the title
 - 'none' / undefined - If the string 'none' is defined, or the value is undefined, the title will remain static
 - 'marquee' - Animate the title text to simulate a scrolling marquee
- **speed** - *Int* - An optional property to change the speed of the title animation effect (in miliseconds)


# Background

- **color**
- **image**


# Options

- **aspectRatio**
- **autoPlay**
- **loop**
- **loading**
- **credits**


# Layers

- **name**
- **visible**
- **objects**


# Objects

- **type**
- **duration**
- **rotation**
- **opacity**
- **width**
- **height**


# Type-specific Properties

## Image

## Video

## Music

## Text

## Drawing
