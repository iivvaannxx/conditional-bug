import { defineConfig } from 'https://esm.sh/@twind/core@1.1.3'
import presetTailwind from 'https://esm.sh/@twind/preset-tailwind@1.1.4'
import presetAutoprefix from 'https://esm.sh/@twind/preset-autoprefix@1.0.7'
import { Options } from 'https://deno.land/x/fresh@1.2.0/plugins/twindv1.ts'

export default {

  ...defineConfig({

    presets: [presetTailwind(), presetAutoprefix()],
  }),

  selfURL: import.meta.url,

} as unknown as Options
