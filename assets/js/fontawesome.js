{{- $icons := partial "utils/get-fontawesome-icons" . -}}
{{- $flattenedIcons := slice -}}

{{- range $key, $value := $icons -}}
  {{- if gt (len $value) 0 -}}
    {{- $flattenedIcons = $flattenedIcons | append $value -}}
    {{- if eq $key "fas" -}}
      import {
        {{- delimit $value ", " -}}
      } from 'js/fontawesome/free-solid-svg-icons/index.js';
    {{- else if eq $key "far" -}}
      import {
        {{- delimit $value ", " -}}
      } from 'js/fontawesome/free-regular-svg-icons/index.js';
    {{- else if eq $key "fab" -}}
      import {
        {{- delimit $value ", " -}}
      } from 'js/fontawesome/free-brands-svg-icons/index.js';
    {{- end -}}
  {{- end -}}
{{- end -}}

import {library, dom} from 'js/fontawesome/fontawesome-svg-core/index.js';
  
library.add(
  {{- delimit $flattenedIcons ", " -}}
)
dom.i2svg()
dom.watch()