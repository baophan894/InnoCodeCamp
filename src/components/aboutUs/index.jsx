import React from "react";

// Sample team member data
const teamMembers = [
  {
    name: "Phan Quốc Thái Bảo ",
    role: "Leader",
    imageUrl:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/448193763_430485549895959_9028795443413084369_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEuLMLOLA1R8dX7dazhCuRpKm_x2WxSQGMqb_HZbFJAY8pl-iG-P94eVGo5lcY9720yST9UHTENMVK5EIsF0XHm&_nc_ohc=Fff54m7sr-QQ7kNvgGaV3_V&_nc_ht=scontent.fdad3-1.fna&oh=03_Q7cD1QHKJvFs9P0y4pQWg6KSWOIpVJY3KXbT_JeQRQOlG6VKgg&oe=66969E16",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyen Van Hoang Phuc",
    role: "Software Developer",
    imageUrl:
      "https://scontent.fdad3-5.fna.fbcdn.net/v/t1.15752-9/447891180_991984582581291_8344674666298431897_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEIk15BLvq9WaC8JKAivj0dUhSr7RMuoXZSFKvtEy6hdvTPZeU8inc7aBIss8ZhkV0v-ccQL6M7kGnozzSk9tFs&_nc_ohc=duREocpbR1QQ7kNvgFYD0Ls&_nc_ht=scontent.fdad3-5.fna&oh=03_Q7cD1QGC6ZWQyt1yCz3OjVeNr6w21fOipEjUJfC709CleFshiQ&oe=6696874B",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Lê Thế Bảo",
    role: "Software Developer",
    imageUrl:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/448265456_976679317570578_4691867079048169810_n.jpg?stp=dst-jpg_s2048x2048&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGIpzdxk0FkuUIi_-en8sS_400cj3a_scTjTRyPdr-xxEzQiz_xAIs_Ja_ydoim4K1UmdPD7HxBR7NAd7yd2dbY&_nc_ohc=ld8e6FIQHl4Q7kNvgFT3lBi&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1QEOmBuySYsrjgwDrtZFVGDLPKvPV-WFWVv3IGKDw18MQQ&oe=6696A800",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Nguyễn Nhật Anh",
    role: "Software Developer",
    imageUrl:
      "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/93158960_233963400996914_8978786156292341760_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHyC_pT96eHXr4iZ1VI4l0xj-O8wJCBAdeP47zAkIEB1yFgTWVFr7F5AOtqBoeeRQZnAEy3MwBm1VwQP00A1Ygu&_nc_ohc=8mWMA445tGgQ7kNvgG7D3yG&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBVemFtfS1GdlItCOCTXY7-EE43QjystVf2UpXhJo253g&oe=669665EB",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Đinh Bảo Hân",
    role: "Software Developer",
    imageUrl:
      "https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/448326825_344179358704734_2866326821880585522_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFe1_RY2kJ8EyT8J2oi6XHs1yp-blRlFUnXKn5uVGUVSRAoqb_Z5ILl3uUMaDltsfx67j1y-onnj52IZa5uXqj7&_nc_ohc=xGGn88jbtyUQ7kNvgFmKcfl&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1QEQ4Yr4hlz5hZj8H22ppLIpVieIbA0D4UEGcJHK7oJGiA&oe=6696B013",
    socialLinks: {
      twitter: "#",
      facebook: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];
function AboutUs() {
  return (
    <div>
      <div className="my-10 w-[70%] h-[2px] bg-gradient-to-r from-red-500 to-red-200"></div>

      <div className="mx-auto mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-red-500 sm:text-4xl md:text-[40px]">
          Về Chúng tôi
        </h2>
        <p className="text-lg text-gray-500">
          Đội ngũ của chúng tôi là một nhóm nhiệt huyết và đam mê về web lịch
          sử. Chúng tôi gồm các thành viên có kinh nghiệm và tâm huyết trong
          việc nghiên cứu và chia sẻ kiến thức về lịch sử thông qua công nghệ
          web.
        </p>
      </div>
      <section id="team" className="bg-sections">
        <div className="container mx-auto py-6 px-4">
          <div>
            <div className="flex justify-between  -mx-4 ">
              {teamMembers.map((member, index) => (
                <div className="w-[25%]  px-4" key={index}>
                  <div className="member mb-8">
                    <img
                      src={member.imageUrl}
                      className="img-fluid"
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                    <h4 className="text-xl font-semibold mt-4">
                      {member.name}
                    </h4>
                    <span className="text-gray-500">{member.role}</span>
                    <div className="flex mt-4">
                      <a
                        href={member.socialLinks.twitter}
                        className="text-blue-500 mr-2"
                      >
                        {/* <i class="fa-brands "></i>
                        <i className="bi bi-twitter"></i> */}
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a
                        href={member.socialLinks.facebook}
                        className="text-blue-700 mr-2"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-blue-500 mr-2"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                      <a
                        href={member.socialLinks.instagram}
                        className="text-pink-600"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end  ml-[30%] my-10 w-[70%] h-[2px] bg-gradient-to-r from-red-200 to-red-500"></div>
    </div>
  );
}
export default AboutUs;
