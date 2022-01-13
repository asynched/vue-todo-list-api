import path from 'path'
import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  '@': path.resolve(__dirname, '..'),
})
