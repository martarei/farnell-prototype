#!/bin/sh
cd /tmp/sandbox/src/imports || exit 1
grep -v 'aria-hidden="true"' Mps751RlragPdp.tsx > _temp_pdp.tsx || exit 1
cat _temp_pdp.tsx > Mps751RlragPdp.tsx || exit 1
rm _temp_pdp.tsx || exit 1
echo "Fixed: File size now $(wc -c < Mps751RlragPdp.tsx) bytes"
