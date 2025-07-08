
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  const { user } = useAuth();
  
  // Set body background to white (in case it was changed by other components)
  useEffect(() => {
    document.body.classList.add('bg-white');
    return () => {
      document.body.classList.remove('bg-white');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-voltgreen-50 to-voltgreen-100 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ora puoi davvero aiutare il pianeta
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              semplicemente risparmiando energia al momento giusto. E ricevi ricompense in denaro per questo!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="font-medium w-full sm:w-auto">
                  Inizia ora la tua registrazione
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="lg" className="font-medium w-full sm:w-auto">
                  Accedi
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
