---
'@keywrite/web': minor
---

This release improves keyboard input handling by adding robust support for the beforeinput event when available, with a safe fallback to keydown for environments that do not support it. This ensures consistent behavior across desktop, mobile, and testing environments while preserving existing functionality.
