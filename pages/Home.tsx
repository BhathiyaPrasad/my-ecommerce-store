import MainLayout from '../components/layout/MainLayout';
import ProductList from '../components/ProductList';
import '../src/app/globals.css'
import Hero from '@components/Hero';
import { SignInButton } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';
import { SignedOut } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import { ClerkProvider } from '@clerk/nextjs';

export default function Home() {
  return (
    <ClerkProvider>
    <SignedOut>
      <SignInButton />
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
    <MainLayout>
      <Hero />
      <ProductList
        category=""
        order=">="
        limit={12}
        group='Brand'
        type=''
      />
    </MainLayout>
    </ClerkProvider>
  );
}

