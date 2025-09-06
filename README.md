# MOVED TO [Furui-Phi-Tweaks](https://github.com/2littersofwater/Furui-Phi-Tweaks)

# Furui-Vivaldi-Phi-Tweaks
Be sure to go to [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi)

This is my personal CSS that I use to fit my liking and just appended some things to Phi that I want to be included, **~~very minor~~** changes, but visually different (I think...). Based mostly on KaKi87's work so head to their repo and support them.

> [!NOTE]
> I do not do most of the code and majority of the appended line is done by using AI. I do not know anything regarding coding styles or javascripts, but I am using this experience to educate myself on this subject. Since I use this mostly to have my preference added, I only want to share what I personally like to see when I open Vivaldi.


# Installation:
### **To install .css styling that I have:**
+ Installation guide found in [KaKi87's Phi for Vivaldi](https://github.com/KaKi87/phi-for-vivaldi), is the same.

### **To install .js custom scripts that I have (essential for scripted codes)**
1. Download the .js files in this repository
2. Navigate to your Vivaldi installation folder and copy the .js files: 
\
``Vivaldi\Application\(Version)\resources\vivaldi``
3. In that folder, find ``window.html`` and edit it to include <script src="filename.js"></script>

Example below:

```
<!-- Vivaldi window document -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Vivaldi</title>
  <link rel="stylesheet" href="style/common.css" />
  <link rel="stylesheet" href="chrome://vivaldi-data/css-mods/css" />
</head>

<body>
  <script src="closepop.js"></script>
  <script src="loadingbar.js"></script>
</body>
</html>
```
> [!IMPORTANT]
> Scripts may be added and removed in the future, edit this part with attention to the .js file name downloaded.
  

## Features:

A lot of things, i am lazy to put screenshots

## Updates:

**Update V0.4 (9/4/2025)**
+ **ADDED:** Vertical Extension List
+ **ADDED:** Top Loading Bar (custom js)

**Update V0.3 (9/3/2025)**
+ **FIXED:** Location of the removed New Tab (+) Icon is now clickable
+ Site Info Button and Page Load Info of the Address Bar is now located at the right side of the field
+ Organized Appended Codes

**Update V0.2 (9/2/2025)**
+ Adjusted the Tab container width (Replica of my Zen Setup)
+ Revamped the tab highlights
  + Pinned tab stays the same (Active Pinned Tabs are still highlighted with a glow effect)
  + Non-pinned tabs are now highlighted differently (Active and Non-active Tabs have their ends as semicircles)
+ Vertical Tabs's Scrollbar is fixed
+ The New tab icon on the bottom is removed (The + icon)
  + **BUG**: The location of the + icon where it was supposed to stay is not clickable (tabs coinciding there cannot be clicked)
+ Much Larger and Much Rounder Address Bar (Replica of my Zen Setup)
