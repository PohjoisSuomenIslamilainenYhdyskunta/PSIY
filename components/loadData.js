import fs from 'fs';
import yaml from 'js-yaml';

export const loadData = (filePath) => {
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.safeLoad(fileContents);
    return data;
  } catch (error) {
    console.error('Error loading data:', error);
    return null;
  }
};
