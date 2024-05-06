export HEISENBERG_HOME="${HOME}/repospace/com/github/matt-wiley/heisenberg"

if [ -f "${HEISENBERG_HOME}/dotfiles/bash_prompts/lz_rwb.sh" ]; then
  source "${HEISENBERG_HOME}/dotfiles/bash_prompts/lz_rwb.sh"
fi

# Enable the legacy provider for Node.js
# ref: https://stackoverflow.com/q/75959563
export NODE_OPTIONS=--openssl-legacy-provider

