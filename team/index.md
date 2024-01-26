---
title: Team
nav:
  order: 2
  tooltip: About our team
---

# {% include icon.html icon="fa-solid fa-users" %}Team

We are a small interdisciplinary team of people with a shared passion for research and the commitment to succeed as a team.

{% include section.html %}

{% include list.html data="members" component="portrait" filters="role: pi" %}
{% include list.html data="members" component="portrait" filters="role: ^(?!pi$)" %}


{% include section.html %}

## Alumni

{% include list.html  data="members"  component="name"  filters="role: alum" %}


{% include grid.html style="square" content=content %}
