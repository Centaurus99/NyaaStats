import path from 'path'

import {loadConfig} from '../utils'

describe('config', () => {
  const configPath = path.resolve(__dirname, './mocks/config.yml')
  const config = loadConfig(configPath)

  test('access config data via dot notation', () => {
    expect(config.render['server-dir']).toBe('/opt/minecraft')
  })

  test('access config data via Config#get()', () => {
    expect(config.get(['render', 'server-dir'])).toBe('/opt/minecraft')
    expect(config.get('render.server-dir')).toBe('/opt/minecraft')
  })

  test('Config#resolve() should resolve argument respecting config file location', () => {
    expect(config.resolve('file')).toBe(path.resolve(configPath, '../file'))
    expect(config.resolve('./file')).toBe(path.resolve(configPath, '../file'))
    expect(config.resolve('../file')).toBe(path.resolve(configPath, '../../file'))
    expect(config.resolve('/file')).toBe('/file')
  })
})
