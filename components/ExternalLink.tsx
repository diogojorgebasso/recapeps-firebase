import { Href, Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { type ComponentProps } from 'react';
import { Platform } from 'react-native';

export function ExternalLink({ href, ...rest }: ComponentProps<typeof Link> & { href: Href }) {

  return (
    <Link
      target="_blank"
      href={href}
      {...rest}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          const url = typeof href === 'string' ? href : href.pathname;
          await openBrowserAsync(url);
        }
      }}
    />
  );
}
