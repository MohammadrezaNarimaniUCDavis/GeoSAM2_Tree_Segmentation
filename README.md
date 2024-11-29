# **Enhancing Orchard Management with Deep Learning: Tree Segmentation Using Geospatial SAM2 Model and Aerial Imagery**

This repository is dedicated to the GeoSAM2 Tree Segmentation project, which utilizes advanced deep learning models for the segmentation of tree canopies from high-resolution aerial imagery. This project is conducted by the Digital Agriculture Laboratory at the University of California, Davis.

## **Project Description**

This project employs the advanced capabilities of the Geospatial Spectral Angle Mapper (SAM) Model 2 (SAM2) to transform orchard management by segmenting individual trees and accurately estimating their areas using NAIP and Google aerial imagery. Our methodology involves marking each tree with rectangular bounding boxes to enhance the segmentation accuracy of the deep learning model. The deployment of SAM2 allows for precise delineation of tree boundaries and computation of each tree's area, offering essential data that directly correlates tree coverage with agricultural yields, fruit, and nut production, and overall biomass. This project not only promises to boost yield predictions and resource allocation but also supports the sustainable management of orchards, positioning it as an indispensable tool in the realm of agricultural technology.

This initiative is part of the ESEARCH program for Fall 2024 at UC Davis, where graduate students guide undergraduates with no prior research experience through the full cycle of a research project over ten weeks. This program aims to provide hands-on research experience and foster practical knowledge in emerging agricultural technologies.

## **Repository Structure**

This repository is organized into multiple directories containing data, scripts, and results pertinent to the tree segmentation project:

### 1. **Data**
   - **Folder**: [`/Data`](./Data)
   - Contains raw and processed datasets including aerial images, annotated datasets, and segmentation outputs. Key files include:
     - High-resolution `.tif` images.
     - Manually annotated tree canopy images for model validation.

### 2. **Google Earth Engine Code**
   - **Folder**: [`/Google_Earth_Engine_Code`](./Google_Earth_Engine_Code)
   - Consists of scripts for processing data within the Google Earth Engine platform, such as:
     - `NAIP_Data_Downloader.js`: For downloading aerial imagery.
     - `Deep_Learning_Tree_Mapping_Visualizer.js`: For visualizing segmentation outputs.

### 3. **Python Code**
   - **Folder**: [`/Python_Code`](./Python_Code)
   - Includes Python scripts and Jupyter notebooks for running the segmentation models, data analysis, and generating visualizations.

### 4. **Shapefiles**
   - **Folder**: [`/Shapefiles`](./Shapefiles)
   - Contains geospatial data files used for mapping and spatial analysis.

### 5. **Poster**
   - **Folder**: [`/Poster`](./Poster)
   - Contains a poster that provides a visual summary of the project. View the project poster here: [`GeoSAM2_Project_Poster.pdf`](./Poster/GeoSAM2_Project_Poster.pdf).

## **Google Earth Engine Repository**

To access and use the Google Earth Engine scripts associated with this project:
- **Clone the GEE Repository**:
```plaintext
https://code.earthengine.google.com/?accept_repo=users/mnarimani/UCDavis_ESEARCH_Fall_2024
```

## **Repository Structure**

To engage with this project, you can clone the repository and explore the data and scripts provided:
```plaintext
git clone https://github.com/MohammadrezaNarimaniUCDavis/GeoSAM2_Tree_Segmentation.git
 ```

Navigate through the folders to access scripts, data, and outputs as described in the repository structure.

## Explore the App
Experience the application live:
- [Deep_Learning_Tree_Mapping_Visualizer]([https://ee-mnarimani.projects.earthengine.app/view/global-vegetation-and-climate-insights-portal](https://ee-mnarimani.projects.earthengine.app/view/deeplearningtreemappingvisualizer)

## **Acknowledgments**
We extend our deepest gratitude to the Digital Agriculture Laboratory and the respective departments at the University of California, Davis for providing the resources and support necessary to conduct this research.

Special thanks to Dr. Qiusheng Wu and the Open Geospatial Solutions team for developing the segment-geospatial library, which has significantly contributed to the success of our project. Their innovative tools have been instrumental in advancing our research in geospatial data analysis. More about their work can be found at their GitHub repository: [Segment-Geospatial](https://github.com/opengeos/segment-geospatial).

## **Contact Information**
For more information, queries, or feedback regarding this project, please contact:
- **Mohammadreza Narimani** - [mnarimani@ucdavis.edu](mailto:mnarimani@ucdavis.edu)
- **Sarbani Kumar** - [srbkumar@ucdavis.edu](mailto:srbkumar@ucdavis.edu)

## **Conference Poster**

Check out the poster of this work that we presented at the ESEARCH program of UC Davis in the fall of 2024. Click on the image below to view the full PDF:

[![ESEARCH 2024 Poster Preview](Poster/ESEARCH_Fall2024_Poster_GeoSAM2_Tree_Segmentation.png)](Poster/ESEARCH_Fall2024_Poster_GeoSAM2_Tree_Segmentation.pdf)
