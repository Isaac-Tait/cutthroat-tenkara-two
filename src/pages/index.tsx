import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
//import ButtonLink from '@/components/links/ButtonLink';
//import UnstyledLink from '@/components/links/UnstyledLink';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <Image
              src='https://cutthroat-tenkara.s3.amazonaws.com/CtT.jpg'
              alt='logo'
              width={750}
              height={250}
            />
            <p className='mt-2 text-sm text-gray-800'>
              Well it has been awhile... Perhaps too long. I said I would bring
              back Cutthroat Tenkara if I could fish more than a few times a
              year.{' '}
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              Well that finally happened, after three long years of not enough
              fishing.
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              Living in Southern California (San Diego) can be a bit depressing
              on the trout front. Long drives to high pressure water, drought
              conditions, epic poison oak, and high wild fire danger are just a
              few of the challenges.
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              Of course the High Sierra are awesome, but it is at least a five
              hour drive north, which is kinda hard to swing for a day trip.
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              Well all that is behind me now because I moved to New England.
              Connecticut to be exact. The first month I lived here, I fished
              every day. Sometimes twice a day. It was awesome.
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              Right now this site will just be a parking spot for{' '}
              <span className='text-emerald-400'>iloveto.fish</span>. When I saw
              that that URL was available I had to take it...
            </p>
            <p className='mt-2 text-sm text-gray-800'>
              So, go ahead and take a look{' '}
              <span className='text-emerald-400'>iloveto.fish</span> is still a
              work in progress but hopefully it will get a little more love than
              my gravel cycling site has...
            </p>
            <p className='mt-2 text-base text-gray-700'>
              <ArrowLink
                href='https://iloveto.fish'
                target='_blank'
                rel='noopener noreferrer'
              >
                Visit iloveto.fish
              </ArrowLink>
            </p>

            <footer className='absolute bottom-2 text-gray-700'>
              © 2018 - {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://mountaintopcoding.dev'>
                mountainTopCoding(
                <span role='img' aria-label='mountain with snow-cap'>
                  &#127956;
                </span>
                );
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
