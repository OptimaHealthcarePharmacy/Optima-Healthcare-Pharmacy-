export type Language = 'en' | 'ne';

export interface NavItem {
  id: string;
  label: string;
  labelNe: string;
  href: string;
}

export interface TrustCard {
  id: string;
  iconName: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
}

export interface ServiceCard {
  id: string;
  iconName: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
  badgeEn?: string;
  badgeNe?: string;
}

export interface MissionCard {
  id: string;
  iconName: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
}

export interface WhyChooseCard {
  id: string;
  iconName: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
}

export interface ExperienceHighlight {
  id: string;
  iconName: string;
  titleEn: string;
  titleNe: string;
  descriptionEn: string;
  descriptionNe: string;
}
