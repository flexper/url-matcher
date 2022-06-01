import extractDomain from 'extract-domain';

function cleanDomain(domain: string): string {
  const cleaned = domain
    ?.replace('https://', '')
    ?.replace('http://', '')
    ?.replace('www.', '')
    ?.replace(/\/+$/, '');
  // Handle special domain with /en for example
  // We want to remove all slashes from web url (ex: www.clustree.com/en)
  if (cleaned && cleaned.indexOf('/') > 1) {
    return cleaned.substring(0, cleaned.indexOf('/'));
  }
  return cleaned;
}

export const urlMatcher = (domainA: string, domainB: string): boolean => {
  if (!domainA || !domainB) {
    return false;
  }
  // Easy case
  const cleanDomainA = cleanDomain(domainA);
  const cleanDomainB = cleanDomain(domainB);

  if (cleanDomainA === cleanDomainB) {
    return true;
  }
  // Sub domain, and more complicated cases
  // However. This package will also remove the sub domain,
  // and unless the TLD option is used, anything other than the domain
  // and second level domain (so www.example.co.uk would return co.uk)
  // So we use the tld option to avoid this.
  const parseResultA = extractDomain(domainA, { tld: true });
  const parseResultB = extractDomain(domainB, { tld: true });
  return (
    parseResultA === parseResultB ||
    parseResultA === domainB ||
    domainA === parseResultB
  );
};
