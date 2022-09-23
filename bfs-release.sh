#!/bin/bash

YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}=> Login to codeartifact${NC}"
aws codeartifact login --tool npm --repository beaconfire-site --domain beaconfire --domain-owner 795824851990

echo ""

echo -e "${YELLOW}=> npm run build && npm publish${NC}"
npm run build && npm publish