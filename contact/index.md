---
title: Contact
nav:
  order: 5
<<<<<<< HEAD
  tooltip: Contact us 
---

# {% include icon.html icon="fa-regular fa-paper-plane" %}Contact

We are located at COS (Centre for Organismal Studies) and IWR (Interdisciplinary Center for Scientific Computing) of Heidelberg University.

**Email:** britta.velten [at] cos.uni-heidelberg.de


{:.center}

{% include section.html %}

## Directions

{% capture text %}


Main Address:

Im Neuenheimer Feld 230 <br>
69120 Heidelberg <br>
Heidelberg <br>

[[map](https://www.google.com/maps/place/Centre+for+Organismal+Studies+(COS)/@49.4179397,8.6723157,17z/data=!3m2!4b1!5s0x4797c13015438091:0xdf1a142a749662df!4m6!3m5!1s0x4797c130155f3d01:0xb716ea9e2f064f2c!8m2!3d49.4179362!4d8.6748853!16s%2Fg%2F1hb_fdscs?entry=ttu)]


{% endcapture %}

{%
  include feature.html
  image="images/contact/HD.jpeg"
  headline=""
  text=text
%}
=======
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{%
  include button.html
  type="email"
  text="jane@smith.com"
  link="jane@smith.com"
%}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/photo.jpg"
  caption="Lorem ipsum"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
>>>>>>> template/main
