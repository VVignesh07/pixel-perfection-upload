CREATE TABLE public.books (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  author TEXT NOT NULL DEFAULT 'WonderLearn Team',
  description TEXT NOT NULL DEFAULT '',
  cover_url TEXT,
  category TEXT NOT NULL DEFAULT 'Story',
  age_range TEXT NOT NULL DEFAULT '4-12',
  soft_price NUMERIC(10,2) NOT NULL DEFAULT 0,
  hard_price NUMERIC(10,2) NOT NULL DEFAULT 0,
  hard_available BOOLEAN NOT NULL DEFAULT true,
  featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.books TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.books TO authenticated;
GRANT ALL ON public.books TO service_role;

ALTER TABLE public.books ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view books" ON public.books FOR SELECT USING (true);
CREATE POLICY "Anyone can add books" ON public.books FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can update books" ON public.books FOR UPDATE USING (true) WITH CHECK (true);
CREATE POLICY "Anyone can delete books" ON public.books FOR DELETE USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON public.books
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.books (title, slug, author, description, category, age_range, soft_price, hard_price, featured) VALUES
('The Starry Balloon', 'the-starry-balloon', 'Mira Rao', 'Two friends float above the clouds in a balloon stitched from starlight, learning that courage grows when it is shared.', 'Friendship', '5-8', 3.99, 12.99, true),
('Luna and the Little Glow', 'luna-and-the-little-glow', 'Ana Petrova', 'Luna finds a glowing puppy under a crescent moon and discovers the science of light along the way.', 'Fantasy', '4-7', 4.49, 14.50, true),
('The Brave Little Sailor', 'the-brave-little-sailor', 'Tom Hale', 'A small boat, a big sea and one very determined sailor learning about tides, maps and never giving up.', 'Adventure', '6-10', 3.49, 11.99, false);