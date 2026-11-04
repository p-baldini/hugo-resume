{{- /*
  A publication in Markdown, for LLMs: its details, then its full text when the site provides it (see
  publicationData.html), else its abstract, then its BibTeX. It is the Markdown version of the page of
  the publication (publications/single.markdown.md), and its part of llms-full.txt.
*/ -}}
{{- $publication := partialCached "publicationData.html" . .RelPermalink -}}
# {{ .Title }}

> {{ .Params.authors }}. {{ .Params.venue }}, {{ .Date | dateFormat "January 2006" }}.
{{- if $publication.fulltext }}
> Full text of the authors' manuscript, from its LaTeX source; figures are reduced to their captions.
{{- end }}

- Web page: {{ .Permalink }}
{{- with $publication.doi }}
- DOI: https://doi.org/{{ . }}
{{- else }}{{ with $publication.url }}
- Online version: {{ . }}
{{- end }}{{ end }}
{{- with $publication.pdf }}
- PDF: {{ . }}
{{- end }}
{{- with .Params.slides_link }}
- Slides: {{ . | absURL }}
{{- end }}

{{ with $publication.fulltext }}{{ .Content | strings.TrimSpace }}{{ else }}## Abstract

{{ $publication.abstract }}{{ end }}
{{- with $publication.bibtex }}

## BibTeX

```bibtex
{{ . }}
```
{{- end }}
