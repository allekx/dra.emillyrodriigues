import { InterestForm } from "@/components/service-page/InterestForm";
import type { Service } from "@/data/types";

type ServiceCtaProps = {
  service: Service;
};

export function ServiceCta({ service }: ServiceCtaProps) {
  return <InterestForm service={service} className="mt-16 sm:mt-20" />;
}
