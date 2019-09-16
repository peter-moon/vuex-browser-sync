import Vue from 'vue';
import Vuex from 'vuex';
import { browserSync } from './../src';

const MODULENAME_DEFAULT = 'browser';
const UA_SAMPLE = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36';

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [browserSync({
    moduleName: MODULENAME_DEFAULT,
    ua: UA_SAMPLE
  })]
});

test('set parsed user agent data', () => {
    const { ua, browser, engine, os, device, cpu } = store.state[MODULENAME_DEFAULT];
    expect(ua.includes('Chrome/74')).toBe(true);
    expect(browser.name).toBe('Chrome');
    expect(engine.name).toBe('Blink');
    expect(os.name).toBe('Windows');
    expect(device.type).toBe(undefined);
    expect(cpu.architecture).toBe('amd64');
});

test('set parsed viewport data', () => {
  const { viewport } = store.state[MODULENAME_DEFAULT];
  
  expect(viewport.err).toBe(null);
  expect(viewport.message).toBe(null);
  expect(typeof viewport.width).toBe('number');
  expect(typeof viewport.height).toBe('number');
  expect(typeof viewport.max).toBe('number');
  expect(typeof viewport.min).toBe('number');
});