import { urlMatcher } from '../src';

describe('Url Matcher', () => {
  it('should match 1', () => {
    const toMatch = 'ibm.com';
    const domain = 'ibm.com';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 2', () => {
    const toMatch = 'https://ibm.com';
    const domain = 'https://ibm.com';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 3', () => {
    const toMatch = 'ibm.com';
    const domain = 'www.ibm.com';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 4', () => {
    const toMatch = 'www.fetcher.ai';
    const domain = 'fetcher.ai';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 5', () => {
    const toMatch = 'www.do.swile.co';
    const domain = 'https://swile.co';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 6', () => {
    const toMatch = 'www.do.swile.co/LK';
    const domain = 'https://swile.co';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 7', () => {
    const toMatch = 'www.do.swile.co/LK';
    const domain = 'swile.co';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should match 8', () => {
    const toMatch = 'ibm.com';
    const domain = 'ibm.fr';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should not match 9', () => {
    const toMatch = 'www.swile.co';
    const domain = 'https://swile.co';
    expect(urlMatcher(domain, toMatch)).toBeTruthy();
  });

  it('should not match 1', () => {
    const toMatch = 'www.do.swile.co/LK';
    const domain = 'https://swyle.co';
    expect(urlMatcher(domain, toMatch)).toBeFalsy();
  });

  it('should not match 2', () => {
    const toMatch = 'www.flexper.fr';
    const domain = 'equitylabs.fr';
    expect(urlMatcher(domain, toMatch)).toBeFalsy();
  });

  it('should not match 3', () => {
    const toMatch = 'www.flexper.fr';
    const domain = 'flexper-en.fr';
    expect(urlMatcher(domain, toMatch)).toBeFalsy();
  });
});
