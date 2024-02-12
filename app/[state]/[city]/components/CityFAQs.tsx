"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { generateFaqs } from "@/utils/openAi";
import { useEffect, useState } from "react";

export default function CityFAQs() {
  const [chatCompletion, setChatCompletion] = useState<string>("");

  useEffect(() => {
    // async function fetchChatCompletion() {
    //   try {
    //     const completion = await generateFaqs("");
    //     console.log({ completion });
    //     setChatCompletion(completion);
    //   } catch (error) {
    //     console.error("Error fetching chat completion:", error);
    //   }
    // }

    // fetchChatCompletion();
  }, []);

  return (
    <section>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger> Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
