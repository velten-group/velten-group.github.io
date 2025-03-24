
Skip to content
Navigation Menu

    velten-group

    velten-group.github.io

Code
Issues
Pull requests 1
Actions
Security
Insights

    Settings

Manually update #35
Open
ThomasGehPunkt wants to merge 5 commits into main from manually_update
+328 −331
Conversation 2
Commits 5
Checks 8
Files changed 4
Open
Manually update
#35
File filter
4 / 4 files viewed

10 changes: 0 additions & 10 deletions 10
.github/workflows/versioning.yaml
Viewed
Binary file modified BIN +0 Bytes (100%)
_cite/.cache/cache.db
Viewed
Binary file not shown.
542 changes: 221 additions & 321 deletions 542
_data/citations.yaml
Viewed
107 changes: 107 additions & 0 deletions 107
index.md
Viewed
Original file line number 	Diff line number 	Diff line change
@@ -0,0 +1,107 @@
---
---
# Welcome to the Velten Group!

We are an interdisciplinary team of scientists developing statistical methods and machine learning approaches to move from molecular data (‘omics data’) to biological insight.

Complex experimental designs and novel technologies enable researchers to study biological processes at unprecedented resolution and scale. We aim to translate and advance ideas from machine learning and statistics for the analysis of such data and make them available to the research community. Jointly with our collaborators we apply our methods to unravel the molecular underpinnings of organismal function, development, plasticity and diseases.

{% include section.html %}

## Highlights

{% capture text %}

We are a small interdisciplinary team with a shared passion for research and the commitment to succeed as a team.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/team.jpeg"
  link="team"
  title="Our Team"
  text=text
%}


{% capture text %}

Research topics include multi-factorial data analysis, modelling of spatio-temporal data and causal inference to dissect gene regulation. 

{%
  include button.html
  link="research"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/research.jpeg"
  link="research"
  title="Our Research"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Find out more about some recent publications from the group.
{%
  include button.html
  link="publications"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/publications.jpeg"
  link="publications"
  title="Publications"
  text=text
%}

{% capture text %}

Find out more about the software and tools developed by our group.

{%
  include button.html
  link="https://github.com/velten-group"
  text="See our software"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/software.jpeg"
  link="https://github.com/velten-group"
  title="Software"
  flip=true
  style="bare"
  text=text
%}
Footer
© 2025 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Docs
    Contact

ThomasGehPunkt reopened this
