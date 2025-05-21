import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]  px-4 max-w-2/3 mx-auto">
      <h1 className="text-4xl font-bold mb-4">About</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        vitae sunt dicta repudiandae natus dolore alias ad adipisci obcaecati
        voluptas, hic provident fugit voluptate et delectus sint accusamus, enim
        repellendus totam temporibus amet? Eaque, natus sint perferendis et
        distinctio temporibus? Voluptatibus ducimus autem suscipit minima eius
        sint architecto fugit quis!
      </p>
    </div>
  );
};

export default About;
