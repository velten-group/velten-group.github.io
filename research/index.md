---
title: Research
nav:
  order: 1
  tooltip: Our projects
---

# {% include icon.html icon="fa-solid fa-circle-nodes" %}Research

Here we provide an overview of some of our ongoing research interests.

Take a look at our [publications](https://velten-group.github.io/publications/) for completed projects.

{% include section.html %}

## Research areas

{% capture text %}
## Integrative data analysis
Modern technologies enable researchers to study biological organisms and processes simultaneously on different molecular layers and in diverse biological contexts. To enable a joint analysis of the resulting data we develop methods for the supervised and unsupervised analysis of multi-modal omics data using probabilistic machine learning. Our methods facilitate the joint analysis of data arising from multiple omics technologies and different biological contexts in a data-driven manner.


{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/research/multimodal.png"
  headline="Multi-Omics Factor Analysis"
  text=text
%}

{% capture text %}
## Spatio-temporal models
Technological advances enable increasingly time- and space-resolved molecular measurements at scale. The resulting molecular read-outs with temporal and spatial resolution offer new opportunities to study the dynamic and contextual properties of a biological system and can uncover novel traits that would not be visible without the temporal or spatial context. To extract such insights from the data we develop methods for the identification of temporal and spatial patterns and their comparison across contexts.

{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/research/spatiotemporal.png"
  headline="Spatio-temporal models"
  text=text
%}

{% capture text %}
## Causal inference & gene regulation
The ability to combine molecular read-outs with targeted or non-targeted interventions opens up new opportunities to gain insights into regulatory mechanisms of key biological processes. We develop new approaches for causal modelling and use of statistical invariance principles in order to pinpoint causal mechanisms on the molecular level and reveal common principles across biological contexts.

{:.center}
{% endcapture %}

{%
  include feature.html
  image="images/research/causal.png"
  headline="Causal models"
  text=text
%}
