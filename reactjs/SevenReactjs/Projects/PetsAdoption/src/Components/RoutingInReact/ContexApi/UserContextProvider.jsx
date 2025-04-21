import React, { useEffect, useState } from "react";
import UserContext from "./UsedContexApi.js";


const UserContextProvider = ({children}) => {
    const [products2, setProducts2] = React.useState([]);
    const [user, setUser] = useState(null);


    // const PetLists = [
    //     { 
    //       id:31,
    //       name: "French Bulldog", 
    //       adoptionRate: "High", 
    //       price: "$1,500 - $3,000", 
    //       description: "Affectionate and great for apartment living.", 
    //       image: "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg" 
    //     },
    //     { 
    //       id:32,
    //       name: "Pomeranian", 
    //       adoptionRate: "High", 
    //       price: "$500 - $2,000", 
    //       description: "Fluffy, playful, and highly energetic.", 
    //       image: "https://patmypets.com/wp-content/uploads/elementor/thumbs/Pomeranian-Pom-Dog-Breed-Information-Characteristics-Price-qk85w1ro5me8ayocfcc157ftvxdzvrjj0gqxp6igze.png" 
    //     },
    //     { 
    //       id:33,
    //       name: "Dachshund", 
    //       adoptionRate: "Moderate", 
    //       price: "$400 - $1,500", 
    //       description: "Loyal and brave, known for their long body.", 
    //       image: "https://upload.wikimedia.org/wikipedia/commons/b/be/%EB%8B%A5%EC%8A%A4%ED%9B%88%ED%8A%B8%28%EB%8B%A8%EB%AA%A8%EC%A2%85%29_%28Dachshund_%28Short%29%29.jpg" 
    //     },
    //     { 
    //       id:34,
    //       name: "Chihuahua", 
    //       adoptionRate: "High", 
    //       price: "$300 - $1,200", 
    //       description: "Tiny, confident, and very loyal to their owners.", 
    //       image: "https://www.zooplus.ie/magazine/wp-content/uploads/2019/12/chihuahua-IE-1024x681.jpg" 
    //     },
    //     { 
    //       id:35,
    //       name: "Shih Tzu", 
    //       adoptionRate: "Moderate", 
    //       price: "$500 - $2,500", 
    //       description: "Friendly and loving lap dogs with long coats.", 
    //       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1E-2rXzg1T5q1aD-Yfa_qdx1TEaENSRVK0p6savGYdUOAUETEw4gv9GVkoHFPF5wWOA&usqp=CAU" 
    //     },
    //     { 
    //       id:36,
    //       name: "Shih Tzu", 
    //       adoptionRate: "Moderate", 
    //       price: "$500 - $2,500", 
    //       description: "Friendly and loving lap dogs with long coats.", 
    //       image: "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg" 
    //     },
    //     // apple
    //     { 
    //       id:26,
    //       name: "Labrador Retriever", 
    //       adoptionRate: "High", 
    //       price: "$500 - $2,000", 
    //       description: "Friendly, intelligent, and great with families.", 
    //       image: "https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg" 
    //     },
    //     { 
    //       id:27,
    //       name: "Golden Retriever", 
    //       adoptionRate: "High", 
    //       price: "$700 - $2,500", 
    //       description: "Loyal, affectionate, and easy to train.", 
    //       image: "https://heronscrossing.vet/wp-content/uploads/Golden-Retriever-1024x683.jpg" 
    //     },
    //     { 
    
    //       id:28,
    //       name: "German Shepherd", 
    //       adoptionRate: "High", 
    //       price: "$500 - $2,000", 
    //       description: "Intelligent, protective, and great for training.", 
    //       image: "https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3.jpg" 
    //     },
    //     { 
    //       id:29,
    //       name: "Rottweiler", 
    //       adoptionRate: "Moderate", 
    //       price: "$1,000 - $3,000", 
    //       description: "Strong, loyal, and protective guard dogs.", 
    //       image: "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg" 
    //     },
    //     { 
    //       id:30,
    //       name: "Siberian Husky", 
    //       adoptionRate: "Moderate", 
    //       price: "$600 - $2,000", 
    //       description: "Energetic, intelligent, and needs cold weather.", 
    //       image: "https://www.dogster.com/wp-content/uploads/2023/02/siberian-husky-in-the-snow_TimmerTammer_Shutterstock-800x533.jpg" 
    //     },
    //         // sumsung
    //         { 
    //           id:21,
    //           name: "Domestic Shorthair", 
    //           adoptionRate: "High", 
    //           price: "$50 - $200", 
    //           description: "Friendly and commonly found in shelters.", 
    //           image: "https://cdn.shopify.com/s/files/1/0564/9907/7167/files/european-shorthair-8267220_1280.jpg?v=1712647406" 
    //         },
    //         { 
    //           id:22,
    //           name: "Siamese", 
    //           adoptionRate: "High", 
    //           price: "$400 - $1,500", 
    //           description: "Vocal and affectionate with striking blue eyes.", 
    //           image: "https://www.petsmont.com/cdn/shop/articles/pexels-photo-357141_1200x1200.jpeg?v=1586934293" 
    //         },
    //         { 
    //           id:23,
    //           name: "Bengal", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,000 - $4,000", 
    //           description: "Active, intelligent, and leopard-like appearance.", 
    //           image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.jpg" 
    //         },
    //         { 
    //           id:24,
    //           name: "British Shorthair", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,200 - $2,500", 
    //           description: "Calm, affectionate, and known for their round face.", 
    //           image: "https://www.dailypaws.com/thmb/4X3BvMf0f_F4HcicyO0Vox4v_9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orange-british-shorthair-1070960066-ff593bc81cfa47e29aa80f0a0085f336.jpg" 
    //         },
    //         { 
    //           id:25,
    //           name: "Abyssinian", 
    //           adoptionRate: "Moderate", 
    //           price: "$500 - $1,500", 
    //           description: "Highly active and loves climbing and exploring.", 
    //           image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8nFGvDCWObaRih54cwNOzJikHlaJdPELNsIyB1dF_H_XM4ex3wkFEb5b0oQrScxwFoURbPSlS0SaZRagRm_MNbg" 
    //         },
    //         // Oppo
    //         { 
    //           id:16,
    //           name: "Maine Coon", 
    //           adoptionRate: "High", 
    //           price: "$800 - $2,500", 
    //           description: "Large, fluffy, and affectionate companions.", 
    //           image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg" 
    //         },
    //         { 
    //           id:17,
    //           name: "Ragdoll", 
    //           adoptionRate: "Moderate", 
    //           price: "$800 - $3,000", 
    //           description: "Gentle and known for their floppy, relaxed nature.", 
    //           image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp" 
    //         },
    //         { 
    //           id:18,
    //           name: "Persian", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,000 - $3,500", 
    //           description: "Elegant, calm, and needs regular grooming.", 
    //           image: "https://cats.com/wp-content/uploads/2020/10/Persian-cat-compressed-1.jpg" 
    //         },
    //         { 
    //           id:19,
    //           name: "Norwegian Forest Cat", 
    //           adoptionRate: "Moderate", 
    //           price: "$600 - $1,500", 
    //           description: "Loves climbing and has a thick, waterproof coat.", 
    //           image: "https://www.catster.com/wp-content/uploads/2023/11/blue-grey-norwegian-forest-cat-outdoor_Elisa-Putti_Shutterstock.jpg" 
    //         },
    //         { 
    //           id:20,
    //           name: "Himalayan", 
    //           adoptionRate: "Moderate", 
    //           price: "$800 - $2,500", 
    //           description: "Beautiful long fur with a Siamese-like face.", 
    //           image: "https://media.istockphoto.com/id/1846104638/photo/long-hair-flame-point-siamese-cat.jpg?s=612x612&w=0&k=20&c=p7BIosCglO0mapYcngL_NPktw2Qu9cEzfBqnIdDf7Mo=" 
    //         },
    //         // vivo
    //         { 
    //           id:11,
    //           name: "Poodle (Dog)", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,000 - $3,000", 
    //           description: "Smart and hypoallergenic with curly coats.", 
    //           image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11161912/202105poodle-dog-breed-toy.jpg" 
    //         },
    //         { 
    //           id:12,
    //           name: "Portuguese Water Dog (Dog)", 
    //           adoptionRate: "Moderate", 
    //           price: "$2,000 - $4,000", 
    //           description: "Energetic and great for active families.", 
    //           image: "https://www.k9rl.com/wp-content/uploads/2016/07/Portuguese-Water-Dog-Image.jpg" 
    //         },
    //         { 
    //           id:13,
    //           name: "Devon Rex (Cat)", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,000 - $2,500", 
    //           description: "Playful and intelligent with a curly coat.", 
    //           image: "https://www.petassure.com/petassure/file-streams/page/uRLlDST5zY5GjbHr00N395unusual-cat-breeds-devon-rex.jpg.jpg" 
    //         },
    //         { 
    //           id:14,
    //           name: "Sphynx (Cat)", 
    //           adoptionRate: "Moderate", 
    //           price: "$1,500 - $3,500", 
    //           description: "Hairless and affectionate, requires skin care.", 
    //           image: "https://cfa.org/wp-content/uploads/2024/02/Sphynx_grid.jpg" 
    //         },
    //         { 
    //           id:15,
    //           name: "Balinese (Cat)", 
    //           adoptionRate: "Moderate", 
    //           price: "$600 - $2,000", 
    //           description: "Elegant and hypoallergenic with long fur.", 
    //           image: "https://images.ctfassets.net/440y9b545yd9/5y0EMhEGZd8P9Zkhc5dFmt/fba507f5c265bcd5d75b607df2b2a880/Balinese850.jpg" 
    //         },
    //         // populer pets
            
    //           // Dogs
    //           { 
    //             id:1,
    //             rank: 1, 
    //             type: "Dog",
    //             name: "Labrador Retriever", 
    //             adoptionRate: "High", 
    //             price: "$500 - $2,000", 
    //             description: "Friendly, intelligent, and great for families. Labradors are one of the most popular dog breeds worldwide.", 
    //             image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/labrador-retriever-dog-breed-info.jpeg" 
    //           },
    //           { 
    //             id:2,
    //             rank: 2, 
    //             type: "Dog",
    //             name: "French Bulldog", 
    //             adoptionRate: "High", 
    //             price: "$1,500 - $3,000", 
    //             description: "Small, affectionate, and great for apartment living. French Bulldogs are highly sought after.", 
    //             image: "https://www.purina.in/sites/default/files/2021-02/BREED%20Hero_0051_french_bulldog.jpg" 
    //           },
    //           { 
    //             id:3,
    //             rank: 3, 
    //             type: "Dog",
    //             name: "Golden Retriever", 
    //             adoptionRate: "High", 
    //             price: "$700 - $2,500", 
    //             description: "Loyal, intelligent, and great with children. Golden Retrievers are known for their friendly nature.", 
    //             image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors.jpg" 
    //           },
    //           { 
    //             id:4,
    //             rank: 4, 
    //             type: "Dog",
    //             name: "German Shepherd", 
    //             adoptionRate: "High", 
    //             price: "$500 - $2,000", 
    //             description: "Highly trainable, protective, and intelligent. German Shepherds are often used in police and service work.", 
    //             image: "https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8" 
    //           },
    //           { 
    //             id:5,
    //             rank: 5, 
    //             type: "Dog",
    //             name: "Bulldog", 
    //             adoptionRate: "Moderate", 
    //             price: "$1,000 - $4,000", 
    //             description: "Calm, affectionate, and great for families. Bulldogs have a distinctive wrinkled face and sturdy build.", 
    //             image: "https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg" 
    //           },
            
    //           // Cats
    //           { 
    //             id:6,
    //             rank: 6, 
    //             type: "Cat",
    //             name: "Domestic Shorthair", 
    //             adoptionRate: "High", 
    //             price: "$50 - $200", 
    //             description: "Friendly, adaptable, and commonly found in shelters. Domestic Shorthairs make great companions.", 
    //             image: "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/domestic-shorthair-cat-blanket-1-.jpg?sfvrsn=f7134fc_6" 
    //           },
    //           { 
    //             id:7,
    //             rank: 7, 
    //             type: "Cat",
    //             name: "Maine Coon", 
    //             adoptionRate: "High", 
    //             price: "$800 - $2,500", 
    //             description: "Large, fluffy, and affectionate. Maine Coons are one of the largest domesticated cat breeds.", 
    //             image: "https://www.marly-dan.com/cdn/shop/articles/448_600x600_crop_center.jpg?v=1721994010" 
    //           },
    //           { 
    //             id:8,
    //             rank: 8, 
    //             type: "Cat",
    //             name: "Siamese", 
    //             adoptionRate: "High", 
    //             price: "$400 - $1,500", 
    //             description: "Vocal, affectionate, and striking in appearance. Siamese cats are known for their blue eyes and sleek coats.", 
    //             image: "https://www.hindustantimes.com/ht-img/img/2023/04/05/1600x900/siamese_cat_1680691007458_1680691018538_1680691018538.jpg" 
    //           },
    //           { 
    //             id:9,
    //             rank: 9, 
    //             type: "Cat",
    //             name: "Ragdoll", 
    //             adoptionRate: "Moderate", 
    //             price: "$800 - $3,000", 
    //             description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.", 
    //             image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp" 
    //           },
    //           { 
    //             id:10,
    //             rank: 10, 
    //             type: "Cat",
    //             name: "Bengal", 
    //             adoptionRate: "Moderate", 
    //             price: "$1,000 - $4,000", 
    //             description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.", 
    //             image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.jpg" 
    //           }
            
    //   ];


      const PetLists2 = [
        {
            id: 31,
            rank: 5,
            type: "Dog",
            size: "Medium", 
            age: "Adult", 
            breed: "French Bulldog", 
            location: "Maharashtra", 
            name: "French Bulldog",
            adoptionRate: "High",
            price: 3000,
            description: "Affectionate and great for apartment living.",
            image: "https://cdn.britannica.com/44/233844-050-A0F9F39C/French-bulldog.jpg"
        },
        {
            id: 32,
            rank: 7,
            type: "Dog",
            size: "Small",
            age: "Puppy",
            breed: "Pomeranian",
            location: "Maharashtra",
            name: "Pomeranian",
            adoptionRate: "High",
            price: 2000,
            description: "Fluffy, playful, and highly energetic.",
            image: "https://patmypets.com/wp-content/uploads/elementor/thumbs/Pomeranian-Pom-Dog-Breed-Information-Characteristics-Price-qk85w1ro5me8ayocfcc157ftvxdzvrjj0gqxp6igze.png"
        },
        {
            id: 33,
            rank: 4,
            type: "Dog",
            size: "Small",
            age: "Adult",
            breed: "Dachshund",
            location: "Maharashtra",
            name: "Dachshund",
            adoptionRate: "Moderate",
            price: 1500,
            description: "Loyal and brave, known for their long body.",
            image: "https://upload.wikimedia.org/wikipedia/commons/b/be/%EB%8B%A5%EC%8A%A4%ED%9B%88%ED%8A%B8%28%EB%8B%A8%EB%AA%A8%EC%A2%85%29_%28Dachshund_%28Short%29%29.jpg"
        },
        {
            id: 34,
            rank: 6,
            type: "Dog",
            size: "Small", 
            age: "Adult", 
            breed: "Chihuahua", 
            location: "Maharashtra", 
            name: "Chihuahua",
            adoptionRate: "High",
            price: 1200,
            description: "Tiny, confident, and very loyal to their owners.",
            image: "https://www.zooplus.ie/magazine/wp-content/uploads/2019/12/chihuahua-IE-1024x681.jpg"
        },
        {
            id: 35,
            rank: 4,
            type: "Dog",
            size: "Small", 
            age: "Adult",
            breed: "Shih Tzu",
            location: "Maharashtra", 
            name: "Shih Tzu",
            adoptionRate: "Moderate",
            price: 2500,
            description: "Friendly and loving lap dogs with long coats.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1E-2rXzg1T5q1aD-Yfa_qdx1TEaENSRVK0p6savGYdUOAUETEw4gv9GVkoHFPF5wWOA&usqp=CAU"
        },
        {
            id: 36,
            rank: 8,
            type: "Dog",
            size: "Small", 
            age: "Adult", 
            breed: "Shih Tzu", 
            location: "Maharashtra",
            name: "Shih Tzu",
            adoptionRate: "Moderate",
            price: 2500,
            description: "Friendly and loving lap dogs with long coats.",
            image: "https://cdn.britannica.com/03/234203-050-C3D47B4B/Shih-tzu-dog.jpg"
        },
        {
            id: 26,
            rank: 9,
            type: "Dog",
            size: "Large", 
            age: "Adult",
            breed: "Labrador Retriever",
            location: "Maharashtra", 
            name: "Labrador Retriever",
            adoptionRate: "High",
            price: 2000,
            description: "Friendly, intelligent, and great with families.",
            image: "https://image.petmd.com/files/styles/863x625/public/2024-11/labrador-retriever.jpg"
        },
        {
            id: 27,
            rank: 7,
            type: "Dog",
            size: "Large",
            age: "Adult", 
            breed: "Golden Retriever", 
            location: "Maharashtra", 
            name: "Golden Retriever",
            adoptionRate: "High",
            price: 2500,
            description: "Loyal, affectionate, and easy to train.",
            image: "https://heronscrossing.vet/wp-content/uploads/Golden-Retriever-1024x683.jpg"
        },
        {
            id: 28,
            rank: 6,
            type: "Dog",
            size: "Large", 
            age: "Adult", 
            breed: "German Shepherd", 
            location: "Maharashtra", 
            name: "German Shepherd",
            adoptionRate: "High",
            price: 2000,
            description: "Intelligent, protective, and great for training.",
            image: "https://worldanimalfoundation.org/wp-content/uploads/2024/02/german-shepherd-2-3.jpg"
        },
        {
            id: 29,
            rank: 5,
            type: "Dog",
            size: "Large", 
            age: "Adult", 
            breed: "Rottweiler", 
            location: "Madhya Pradesh", 
            name: "Rottweiler",
            adoptionRate: "Moderate",
            price: 3000,
            description: "Strong, loyal, and protective guard dogs.",
            image: "https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg"
        },
        {
            id: 30,
            rank: 7,
            type: "Dog",
            size: "Large", 
            age: "Adult", 
            breed: "Siberian Husky", 
            location: "Madhya Pradesh", 
            name: "Siberian Husky",
            adoptionRate: "Moderate",
            price: 2000,
            description: "Energetic, intelligent, and needs cold weather.",
            image: "https://www.dogster.com/wp-content/uploads/2023/02/siberian-husky-in-the-snow_TimmerTammer_Shutterstock-800x533.jpg"
        },
        {
            id: 21,
            rank: 4,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Domestic Shorthair", 
            location: "Madhya Pradesh", 
            name: "Domestic Shorthair",
            adoptionRate: "High",
            price: 1200,
            description: "Friendly and commonly found in shelters.",
            image: "https://cdn.shopify.com/s/files/1/0564/9907/7167/files/european-shorthair-8267220_1280.jpg?v=1712647406"
        },
        {
            id: 22,
            rank: 6,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Siamese", 
            location: "Madhya Pradesh", 
            name: "Siamese",
            adoptionRate: "High",
            price: 1500.00,
            description: "Vocal and affectionate with striking blue eyes.",
            image: "https://www.petsmont.com/cdn/shop/articles/pexels-photo-357141_1200x1200.jpeg?v=1586934293"
        },
        {
            id: 23,
            rank: 3,
            type: "Cat",
            size: "Medium", 
            age: "Adult",
            breed: "Bengal", 
            location: "Delhi", 
            name: "Bengal",
            adoptionRate: "Moderate",
            price: 4000,
            description: "Active, intelligent, and leopard-like appearance.",
            image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.jpg"
        },
        {
            id: 24,
            rank: 8,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "British Shorthair", 
            location: "Delhi", 
            name: "British Shorthair",
            adoptionRate: "Moderate",
            price: 2500,
            description: "Calm, affectionate, and known for their round face.",
            image: "https://www.dailypaws.com/thmb/4X3BvMf0f_F4HcicyO0Vox4v_9M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/orange-british-shorthair-1070960066-ff593bc81cfa47e29aa80f0a0085f336.jpg"
        },
        {
            id: 25,
            rank: 4,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Abyssinian",
            location: "Delhi", 
            name: "Abyssinian",
            adoptionRate: "Moderate",
            price: 1500,
            description: "Highly active and loves climbing and exploring.",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8nFGvDCWObaRih54cwNOzJikHlaJdPELNsIyB1dF_H_XM4ex3wkFEb5b0oQrScxwFoURbPSlS0SaZRagRm_MNbg"
        },
        {
            id: 16,
            rank: 4,
            type: "Cat",
            size: "Large", 
            age: "Adult", 
            breed: "Maine Coon", 
            location: "Delhi", 
            name: "Maine Coon",
            adoptionRate: "High",
            price: 2500,
            description: "Large, fluffy, and affectionate companions.",
            image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2019/03/maine-coon-cat-breed.jpg"
        },
        {
            id: 17,
            rank: 3,
            type: "Cat",
            size: "Large", 
            age: "Adult", 
            breed: "Ragdoll", 
            location: "Andhra Pradesh", 
            name: "Ragdoll",
            adoptionRate: "Moderate",
            price: 3000,
            description: "Gentle and known for their floppy, relaxed nature.",
            image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp"
        },
        {
            id: 18,
            rank: 7,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Persian", 
            location: "Andhra Pradesh", 
            name: "Persian",
            adoptionRate: "Moderate",
            price: 3500,
            description: "Elegant, calm, and needs regular grooming.",
            image: "https://cats.com/wp-content/uploads/2020/10/Persian-cat-compressed-1.jpg"
        },
        {
            id: 19,
            rank: 6,
            type: "Cat",
            size: "Large", 
            age: "Adult", 
            breed: "Norwegian Forest Cat", 
            location: "Andhra Pradesh", 
            name: "Norwegian Forest Cat",
            adoptionRate: "Moderate",
            price: 1500,
            description: "Loves climbing and has a thick, waterproof coat.",
            image: "https://www.catster.com/wp-content/uploads/2023/11/blue-grey-norwegian-forest-cat-outdoor_Elisa-Putti_Shutterstock.jpg"
        },
        {
            id: 20,
            rank: 8,
            type: "Cat",
            size: "Medium",
            age: "Adult", 
            breed: "Himalayan", 
            location: "Himachal Pradesh", 
            name: "Himalayan",
            adoptionRate: "Moderate",
            price: 2500,
            description: "Beautiful long fur with a Siamese-like face.",
            image: "https://media.istockphoto.com/id/1846104638/photo/long-hair-flame-point-siamese-cat.jpg?s=612x612&w=0&k=20&c=p7BIosCglO0mapYcngL_NPktw2Qu9cEzfBqnIdDf7Mo="
        },
        {
            id: 11,
            rank: 4,
            type: "Dog", 
            size: "Medium", // Poodles can be various sizes, adjust as needed
            age: "Adult", 
            breed: "Poodle", 
            location: "Karnataka", 
            name: "Poodle (Dog)",
            adoptionRate: "Moderate",
            price: 3000,
            description: "Smart and hypoallergenic with curly coats.",
            image: "https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11161912/202105poodle-dog-breed-toy.jpg"
        },
        {
            id: 12,
            rank: 5,
            type: "Dog",
            size: "Medium", 
            age: "Adult", 
            breed: "Portuguese Water Dog", 
            location: "Karnataka", 
            name: "Portuguese Water Dog (Dog)",
            adoptionRate: "Moderate",
            price: 4000,
            description: "Energetic and great for active families.",
            image: "https://www.k9rl.com/wp-content/uploads/2016/07/Portuguese-Water-Dog-Image.jpg"
        },
        {
            id: 13,
            rank: 7,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Devon Rex", 
            location: "Karnataka", 
            name: "Devon Rex (Cat)",
            adoptionRate: "Moderate",
            price: 2500,
            description: "Playful and intelligent with a curly coat.",
            image: "https://www.petassure.com/petassure/file-streams/page/uRLlDST5zY5GjbHr00N395unusual-cat-breeds-devon-rex.jpg.jpg"
        },
        {
            id: 14,
            rank: 7,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Sphynx", 
            location: "Karnataka", 
            name: "Sphynx (Cat)",
            adoptionRate: "Moderate",
            price: 1500,
            description: "Hairless and affectionate, requires skin care.",
            image: "https://cfa.org/wp-content/uploads/2024/02/Sphynx_grid.jpg"
        },
        {
            id: 15,
            rank: 8,
            type: "Cat",
            size: "Medium", 
            age: "Adult", 
            breed: "Balinese", 
            location: "Maharashtra", 
            name: "Balinese (Cat)",
            adoptionRate: "Moderate",
            price: 2000,
            description: "Elegant and hypoallergenic with long fur",
            image: "https://images.ctfassets.net/440y9b545yd9/5y0EMhEGZd8P9Zkhc5dFmt/fba507f5c265bcd5d75b607df2b2a880/Balinese850.jpg" 
        },
        {
          id: 1,
          rank: 1,
          type: "Dog",
          size: "Large", // Example size, adjust as needed
          age: "Adult",  // Example age
          breed: "Labrador Retriever",
          location: "Karnataka", // Example location
          name: "Labrador Retriever",
          adoptionRate: "High",
          price: 2000,
          description: "Friendly, intelligent, and great for families. Labradors are one of the most popular dog breeds worldwide.",
          image: "https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/labrador-retriever-dog-breed-info.jpeg"
      },
      {
          id: 2,
          rank: 2,
          type: "Dog",
          size: "Small",
          age: "Adult",
          breed: "French Bulldog",
          location: "Karnataka",
          name: "French Bulldog",
          adoptionRate: "High",
          price: 1500,
          description: "Small, affectionate, and great for apartment living. French Bulldogs are highly sought after.",
          image: "https://www.purina.in/sites/default/files/2021-02/BREED%20Hero_0051_french_bulldog.jpg"
      },
      {
          id: 3,
          rank: 10,
          type: "Dog",
          size: "Small",
          age: "Adult",
          breed: "Golden Retriever",
          location: "Karnataka",
          name: "Golden Retriever",
          adoptionRate: "High",
          price: 2500,
          description: "Loyal, intelligent, and great with children. Golden Retrievers are known for their friendly nature.",
          image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2020/07/09151754/Golden-Retriever-puppy-standing-outdoors.jpg"
      },
      {
          id: 4,
          rank: 10,
          type: "Dog",
          size: "Large",
          age: "Adult",
          breed: "German Shepherd",
          location: "Karnataka",
          name: "German Shepherd",
          adoptionRate: "High",
          price: 2000,
          description: "Highly trainable, protective, and intelligent. German Shepherds are often used in police and service work.",
          image: "https://image.petmd.com/files/inline-images/german-shepherd-3.jpg?VersionId=QrldSoaj4srcfCInIahiKcoLSh5D0gh8"
      },
      {
          id: 5,
          rank: 8,
          type: "Dog",
          size: "Medium",
          age: "Adult",
          breed: "Bulldog",
          location: "Karnataka",
          name: "Bulldog",
          adoptionRate: "Moderate",
          price: 4000,
          description: "Calm, affectionate, and great for families. Bulldogs have a distinctive wrinkled face and sturdy build.",
          image: "https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg"
      },
      {
          id: 6,
          rank: 6,
          type: "Cat",
          size: "Medium",
          age: "Adult",
          breed: "Domestic Shorthair",
          location: "Maharashtra",
          name: "Domestic Shorthair",
          adoptionRate: "High",
          price: 1200,
          description: "Friendly, adaptable, and commonly found in shelters. Domestic Shorthairs make great companions.",
          image: "https://www.trupanion.com/images/trupanionwebsitelibraries/pet-blogs/domestic-shorthair-cat-blanket-1-.jpg?sfvrsn=f7134fc_6"
      },
      {
          id: 7,
          rank: 7,
          type: "Cat",
          size: "Large",
          age: "Adult",
          breed: "Maine Coon",
          location: "Maharashtra",
          name: "Maine Coon",
          adoptionRate: "High",
          price: 2500,
          description: "Large, fluffy, and affectionate. Maine Coons are one of the largest domesticated cat breeds.",
          image: "https://www.marly-dan.com/cdn/shop/articles/448_600x600_crop_center.jpg?v=1721994010"
      },
      {
          id: 8,
          rank: 10,
          type: "Cat",
          size: "Medium",
          age: "Adult",
          breed: "Siamese",
          location: "Maharashtra",
          name: "Siamese",
          adoptionRate: "High",
          price: 1500,
          description: "Vocal, affectionate, and striking in appearance. Siamese cats are known for their blue eyes and sleek coats.",
          image: "https://www.hindustantimes.com/ht-img/img/2023/04/05/1600x900/siamese_cat_1680691007458_1680691018538_1680691018538.jpg"
      },
      {
          id: 9,
          rank: 9,
          type: "Cat",
          size: "Medium",
          age: "Adult",
          breed: "Ragdoll",
          location: "Maharashtra",
          name: "Ragdoll",
          adoptionRate: "Moderate",
          price: 3000,
          description: "Gentle, affectionate, and known for their floppy nature when picked up. Ragdolls love human attention.",
          image: "https://cfa.org/wp-content/uploads/2024/06/2024-c23c-ZeusRagdollXiaoYao-1024x768.webp"
      },
      {
          id: 10,
          rank: 10,
          type: "Cat",
          size: "Medium",
          age: "Adult",
          breed: "Bengal",
          location: "Maharashtra",
          name: "Bengal",
          adoptionRate: "Moderate",
          price: 4000,
          description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.",
          image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.jpg"
      },
      {
          id: 11,
          rank: 5,
          type: "Cat",
          size: "Medium",
          age: "Adult",
          breed: "Bengal",
          location: "Maharashtra",
          name: "Bengal",
          adoptionRate: "Moderate",
          price: 4000,
          description: "Active, intelligent, and known for their leopard-like spots. Bengals require a lot of stimulation.",
          image: "https://www.zooplus.co.uk/magazine/wp-content/uploads/2018/02/fotolia_82719975.jpg"
      }
    ];

    const ShelterList = [
        {
          id:1,
          name: "People For Animals",
          location: "New Delhi, Delhi",
          contact: "+91-11-12345678",
          price: 30,
          sheltermode:"offline",
          month:"jan",
          type:"Cat",
          description: "India's largest animal welfare organization.",
          image: "https://media.licdn.com/dms/image/v2/C561BAQFRn3SidF76vw/company-background_10000/company-background_10000/0/1583914934408?e=2147483647&v=beta&t=3kLQvG-JUSukoC0_vhFkrf9noSLQ8z1KxTHqzG3NdMs"
        },
        {
          id:2,
          name: "Blue Cross of India",
          location: "Chennai, Tamil Nadu",
          contact: "+91-44-87654321",
          price: 35,
          sheltermode:"offline",
          month:"jan",
          type:"Cat",
          description: "Rescuing and rehabilitating animals since 1959.",
          image: "https://asianatimes.com/wp-content/uploads/2021/11/Untitled-design-52.png"
        },
        {
          id:3,
          name: "The Bombay Society for the Prevention of Cruelty to Animals (BSPCA)",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-98765432",
          price: 51,
          sheltermode:"offline",
          month:"feb",
          type:"Cat",
          description: "Providing medical aid and shelter to stray animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStD2jdWmBmQiU7Lz4DY_lQ1hhNyVJp50P7vA&s"
        },
        {
          id:4,
          name: "Friendicoes SECA",
          location: "New Delhi, Delhi",
          contact: "+91-11-56789012",
          price: 35,
          sheltermode:"offline",
          month:"feb",
          type:"Dog",
          description: "Dedicated to the rescue, treatment, and adoption of stray animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbpbcFw5CuNIyxW0D9ekMo519IFSR8qiM5fQ&s"
        },
        {
          id:5,
          name: "Animal Aid Unlimited",
          location: "Udaipur, Rajasthan",
          contact: "+91-294-7654321",
          price: 46,
          sheltermode:"offline",
          month:"feb",
          type:"Dog",
          description: "Rescuing street animals in need of urgent medical care.",
          image: "https://www.animalaidunlimited.org/wp-content/themes/cgit-animal-aid-unlimited/images/Icon_2.png"
        },
        {
          id:6,
          name: "Karuna Animal Shelter",
          location: "Bengaluru, Karnataka",
          contact: "+91-80-23456789",
          price: 30,
          sheltermode:"online",
          month:"mar",
          type:"Dog",
          description: "Promoting kindness towards animals through rescue and rehabilitation.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThnCBDBUzN_OC74i52uengJ-HF11QGKQi2LQ&s"
        },
        {
          id:7,
          name: "Sanjay Gandhi Animal Care Centre",
          location: "New Delhi, Delhi",
          contact: "+91-11-76543210",
          price: 65,
          sheltermode:"online",
          month:"mar",
          type:"Dog",
          description: "India’s oldest and largest animal shelter.",
          image: "https://3.imimg.com/data3/TQ/BP/MY-3453553/sanjay-gandhi-animal-care-centre-logo-120x120.png"
        },
        {
          id:8,
          name: "CUPA (Compassion Unlimited Plus Action)",
          location: "Bengaluru, Karnataka",
          contact: "+91-80-34567890",
          price: 60,
          sheltermode:"online",
          month:"apr",
          type:"Dog",
          description: "Working for animal welfare and rights.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCVC6CHNuSpzVixLGM5dsAvV75eEbj3x5QMA&s"
        },
        {
          id:9,
          name: "RESQ Charitable Trust",
          location: "Pune, Maharashtra",
          contact: "+91-20-23459876",
          price: 67,
          sheltermode:"online",
          month:"apr",
          type:"Dog",
          description: "Dedicated to rescuing injured and sick street animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgP9ROpUU912msHzEa-guDNjdJixtlZIZ3gQ&s"
        },
        {
          id:10,
          name: "Animal Shelter Agra",
          location: "Agra, Uttar Pradesh",
          contact: "+91-562-12349876",
          price: 50,
          sheltermode:"online",
          month:"may",
          type:"Dog",
          description: "Providing medical aid, rescue, and shelter for animals in need.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsWPB4gEd6o0RgbXplf1sb9D25FDUncLSpNg&s"
        },
        {
          id:11,
          name: "Stray Relief and Animal Welfare (STRAW) India",
          location: "Gurgaon, Haryana",
          contact: "+91-124-45678901",
          price: 30,
          sheltermode:"online",
          month:"may",
          type:"Cat",
          description: "Promoting humane treatment of animals and preventing cruelty.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhdAjibrl6lfp70x99z2PfFHbQ8kNYoFa8A&s"
        },
        {
          id:12,
          name: "The Pawsome People Project",
          location: "Hyderabad, Telangana",
          contact: "+91-40-87654321",
          price: 36,
          sheltermode:"online",
          month:"jun",
          type:"Cat",
          description: "Providing rescue and rehabilitation services for stray animals.",
          image: "https://static1.squarespace.com/static/5d89e2dbe969b660d8e81b64/t/6393b1f319e469602bfc43f4/1710574542729/"
        },
        {
          id:13,
          name: "Animal Rahat",
          location: "Satara, Maharashtra",
          contact: "+91-2162-123456",
          price: 34,
          sheltermode:"offline",
          month:"jun",
          type:"Cat",
          description: "Relieving the suffering of working animals.",
          image: "https://resources.peta.org/engaging-networks/pages/animalrahat/images/social-media-thumbnail-animal-rahat.jpg"
        },
        {
          id:14,
          name: "Hope for Strays",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-76543210",
          price: 35,
          sheltermode:"offline",
          month:"jun",
          type:"Cat",
          description: "Rescuing and rehabilitating stray animals.",
          image: "https://hopeforstrays.org/wp-content/uploads/2019/11/new-border.png"
        },
        {
          id:15,
          name: "Animals Matter to Me (AMTM)",
          location: "Mumbai, Maharashtra",
          contact: "+91-22-23456789",
          price: 50,
          sheltermode:"offline",
          month:"jun",
          type:"Cat",
          description: "A sanctuary for abandoned, injured, and ill-treated animals.",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT790wV8E5St_p-bPw3PcHOSXMwn50YQJbhNA&s"
        }
      ];

      useEffect(() => {
        const TacthProductData =  async () => {
            try {
                
                await setProducts2(PetLists2)


            } catch (error) {
                console.log(error || "somting went rwong");
                
            }

        };
        TacthProductData()
      },[])

      // console.log("contexApi",products2 )


    return(
        <UserContext.Provider value={{products2,user,setUser,ShelterList}}>
        {children}
        </UserContext.Provider>
    )

}


export default UserContextProvider;